import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { DateTime } from 'luxon';

import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../comun/transferencia';

import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura/persistencia';
import {
  IPuestoPersonaServicio,
  PUESTO_PERSONA_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { InfoLaboral, PuestoPersona } from '../../dominio/entidades';
import { PuestoPersonaFiltro } from '../../dominio/entidades/filtros';
import {
  PuestoPersonaCreacionDto,
  PuestoPersonaDto,
  PuestoPersonaModificacionDto,
} from '../../dominio/transferencia';
import { PuestoPersonaFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class PuestoPersonaService implements IPuestoPersonaServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<PuestoPersona>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new PuestoPersonaFiltro();
        filtro.tipoMovilidad = objetoDto.tipoMovilidad;
        filtro.tipoLaboral = objetoDto.tipoLaboral;
        filtro.estado = objetoDto.estado;
        filtro.puestoId = objetoDto.puestoId;
        const puestoPersonaBD =
          await this.repositorioFactory.puestoPersonaRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (puestoPersonaBD) {
          errores.push('El registro ya existe.');
          return false;
        }
      }
      case 'modificar': {
        if (!objetoDto) {
          errores.push('El objeto no puede ser nulo.');
          return false;
        }
      }
      case 'eliminar': {
        return true;
      }
    }
  }

  async buscar(
    filtroDto: PuestoPersonaFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<PuestoPersonaDto>> {
    const respuesta =
      await this.repositorioFactory.puestoPersonaRepositorio.obtenerPor(
        this.mapper.map(filtroDto, PuestoPersonaFiltroDto, PuestoPersonaFiltro),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<PuestoPersonaDto>(
      this.mapper.mapArray(respuesta.lista, PuestoPersona, PuestoPersonaDto),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<PuestoPersonaDto> {
    const objeto =
      await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, PuestoPersona, PuestoPersonaDto);
  }

  async modificar(
    id: number,
    objetoDto: PuestoPersonaModificacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        PuestoPersonaModificacionDto,
        PuestoPersona,
      );
      const puestoPersonaBD =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
      if (!puestoPersonaBD) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no existe.',
          null,
        );
      }

      const infoLaboralBD =
        await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(
          objeto.personaId,
        );

      if (!infoLaboralBD) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }

      infoLaboralBD.tipoLaboral = objeto.tipoLaboral;
      infoLaboralBD.uniOrganizacionalId = objeto.uniOrganizacionalId;
      infoLaboralBD.puestoId = objeto.puestoId;
      const infoLaboralRespuesta =
        await this.repositorioFactory.infoLaboralRepositorio.modificar(
          infoLaboralBD.id,
          infoLaboralBD,
          transaccion,
        );
      if (!infoLaboralRespuesta) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }

      delete objeto.tipoMovilidad;
      delete objeto.esInterinato;
      delete objeto.estado;
      objeto.fecConclusion =
        objeto.fecConclusion.toString() === '' ? null : objeto.fecConclusion;
      await this.repositorioFactory.puestoPersonaRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async guardarIncorporacion(
    objetoDto: PuestoPersonaCreacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const errores = [];
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        PuestoPersonaCreacionDto,
        PuestoPersona,
      );
      let infoLaboralBD =
        await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(
          objetoDto.personaId,
        );

      if (!infoLaboralBD) {
        infoLaboralBD = new InfoLaboral();
        infoLaboralBD.id = objeto.personaId;
        infoLaboralBD.tipoLaboral = objeto.tipoLaboral;
        infoLaboralBD.uniOrganizacionalId = objeto.uniOrganizacionalId;
        infoLaboralBD.puestoId = objeto.puestoId;
        infoLaboralBD.estado = 'ACTIVO';
        const infoLaboralId =
          await this.repositorioFactory.infoLaboralRepositorio.guardar(
            infoLaboralBD,
            transaccion,
          );
        if (infoLaboralId <= 0) {
          await this.repositorioFactory.revertir(transaccion);
          return new RespuestaObjetoDto(
            TipoRespuesta.Error,
            'El registro no se ha podido guardar.',
            null,
          );
        }
      } else {
        infoLaboralBD.tipoLaboral = objeto.tipoLaboral;
        infoLaboralBD.uniOrganizacionalId = objeto.uniOrganizacionalId;
        infoLaboralBD.puestoId = objeto.puestoId;
        infoLaboralBD.estado = 'ACTIVO';
        const infoLaboralRespuesta =
          await this.repositorioFactory.infoLaboralRepositorio.modificar(
            infoLaboralBD.id,
            infoLaboralBD,
            transaccion,
          );
        if (!infoLaboralRespuesta) {
          await this.repositorioFactory.revertir(transaccion);
          return new RespuestaObjetoDto(
            TipoRespuesta.Error,
            'El registro no se ha podido modificar.',
            null,
          );
        }
      }

      objeto.tipoMovilidad = 'INCORPORACION';
      objeto.esInterinato = false;
      objeto.tieneDesvinculacion = false;
      objeto.estado = 'ACTUAL';

      const validacion = await this.validar('guardar', objeto, errores);
      if (!validacion) {
        return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
      }

      await this.repositorioFactory.puestoPersonaRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async guardarReasignacion(
    objetoDto: PuestoPersonaCreacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const errores = [];
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        PuestoPersonaCreacionDto,
        PuestoPersona,
      );
      const infoLaboralBD =
        await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(
          objeto.personaId,
        );

      if (!infoLaboralBD) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido guardar.',
          null,
        );
      }

      infoLaboralBD.tipoLaboral = objeto.tipoLaboral;
      infoLaboralBD.uniOrganizacionalId = objeto.uniOrganizacionalId;
      infoLaboralBD.puestoId = objeto.puestoId;
      const infoLaboralModificacion =
        await this.repositorioFactory.infoLaboralRepositorio.modificar(
          infoLaboralBD.id,
          infoLaboralBD,
          transaccion,
        );
      if (!infoLaboralModificacion) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }

      const filtro = new PuestoPersonaFiltroDto();
      filtro.personaId = objeto.personaId;
      filtro.esInterinato = false;
      filtro.estado = 'ACTUAL';
      const ultimoPuestoPersona =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerObjetoPor(
          filtro,
          'id',
          'DESC',
        );

      if (!ultimoPuestoPersona) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido guardar.',
          null,
        );
      }

      ultimoPuestoPersona.estado = 'ANTERIOR';
      ultimoPuestoPersona.fecConclusion = DateTime.fromISO(
        objeto.fecInicio.toString(),
        {
          zone: 'utc',
        },
      )
        .setZone(DateTime.local().zoneName, { keepLocalTime: true })
        .minus({ days: 1 })
        .toJSDate();

      const puestoPersonaModificacion =
        await this.repositorioFactory.puestoPersonaRepositorio.modificar(
          ultimoPuestoPersona.id,
          ultimoPuestoPersona,
          transaccion,
        );

      if (!puestoPersonaModificacion) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }

      objeto.tipoMovilidad = 'REASIGNACION';
      objeto.esInterinato = false;
      objeto.tieneDesvinculacion = false;
      objeto.estado = 'ACTUAL';

      const validacion = await this.validar('guardar', objeto, errores);
      if (!validacion) {
        return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
      }

      await this.repositorioFactory.puestoPersonaRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async registrarDesvinculacion(
    id: number,
    fecConclusion: Date,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const puestoPersonaBD =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
      if (
        !puestoPersonaBD ||
        puestoPersonaBD.esInterinato ||
        puestoPersonaBD.estado !== 'ACTUAL'
      ) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no existe.',
          null,
        );
      }

      puestoPersonaBD.fecConclusion = fecConclusion;
      puestoPersonaBD.tieneDesvinculacion = true;

      await this.repositorioFactory.puestoPersonaRepositorio.modificar(
        id,
        puestoPersonaBD,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(puestoPersonaBD, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async darBaja(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const puestoPersonaBD =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
      if (
        !puestoPersonaBD ||
        !puestoPersonaBD.tieneDesvinculacion ||
        puestoPersonaBD.estado !== 'ACTUAL'
      ) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'No se puede realizar la operación solicitada.',
          null,
        );
      }

      const diferencia = DateTime.fromISO(
        puestoPersonaBD.fecConclusion.toString(),
        {
          zone: 'utc',
        },
      )
        .setZone(DateTime.local().zoneName, { keepLocalTime: true })
        .diffNow('days');

      if (diferencia.days > -1) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'No se puede realizar la operación solicitada.',
          null,
        );
      }

      const infoLaboralBD =
        await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(
          puestoPersonaBD.personaId,
        );

      if (!infoLaboralBD) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }

      infoLaboralBD.estado = 'PASIVO';
      const infoLaboralRespuesta =
        await this.repositorioFactory.infoLaboralRepositorio.modificar(
          infoLaboralBD.id,
          infoLaboralBD,
          transaccion,
        );
      if (!infoLaboralRespuesta) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }

      puestoPersonaBD.estado = 'ANTERIOR';
      await this.repositorioFactory.puestoPersonaRepositorio.modificar(
        id,
        puestoPersonaBD,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(puestoPersonaBD, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async anular(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const puestoPersonaBD =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
      if (
        !puestoPersonaBD ||
        puestoPersonaBD.esInterinato ||
        puestoPersonaBD.estado !== 'ACTUAL'
      ) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }

      const filtro = new PuestoPersonaFiltroDto();
      filtro.estado = 'ANTERIOR';
      filtro.personaId = puestoPersonaBD.personaId;
      const anteriorPuestoPersona =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerObjetoPor(
          filtro,
          'id',
          'DESC',
        );

      if (anteriorPuestoPersona) {
        const infoLaboral =
          await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(
            puestoPersonaBD.personaId,
          );

        if (!infoLaboral) {
          await this.repositorioFactory.revertir(transaccion);
          return new RespuestaObjetoDto(
            TipoRespuesta.Error,
            'El registro no se ha podido modificar.',
            null,
          );
        }

        infoLaboral.tipoLaboral = anteriorPuestoPersona.tipoLaboral;
        infoLaboral.uniOrganizacionalId =
          anteriorPuestoPersona.uniOrganizacionalId;
        infoLaboral.puestoId = anteriorPuestoPersona.puestoId;
        const infoLaboralRespuesta =
          await this.repositorioFactory.infoLaboralRepositorio.modificar(
            infoLaboral.id,
            infoLaboral,
            transaccion,
          );
        if (!infoLaboralRespuesta) {
          await this.repositorioFactory.revertir(transaccion);
          return new RespuestaObjetoDto(
            TipoRespuesta.Error,
            'El registro no se ha podido modificar.',
            null,
          );
        }

        anteriorPuestoPersona.fecConclusion = null;
        anteriorPuestoPersona.estado = 'ACTUAL';
        await this.repositorioFactory.puestoPersonaRepositorio.modificar(
          anteriorPuestoPersona.id,
          anteriorPuestoPersona,
          transaccion,
        );
      } else {
        const infoLaboral =
          await this.repositorioFactory.infoLaboralRepositorio.obtenerPorId(
            puestoPersonaBD.personaId,
          );

        if (infoLaboral) {
          await this.repositorioFactory.infoLaboralRepositorio.eliminar(
            puestoPersonaBD.personaId,
            transaccion,
            true,
          );
        }
      }

      puestoPersonaBD.estado = 'ANULADO';
      const puestoPersonaModificacion =
        await this.repositorioFactory.puestoPersonaRepositorio.modificar(
          puestoPersonaBD.id,
          puestoPersonaBD,
          transaccion,
        );

      if (!puestoPersonaModificacion) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no se ha podido modificar.',
          null,
        );
      }

      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(puestoPersonaBD, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async guardarInterinato(
    objetoDto: PuestoPersonaCreacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const errores = [];
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        PuestoPersonaCreacionDto,
        PuestoPersona,
      );
      objeto.tipoMovilidad = 'DESIGNACION';
      objeto.esInterinato = true;
      objeto.tieneDesvinculacion = false;
      objeto.estado = 'ACTUAL';

      const validacion = await this.validar('guardar', objeto, errores);
      if (!validacion) {
        return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
      }

      await this.repositorioFactory.puestoPersonaRepositorio.guardar(
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async modificarInterinato(
    id: number,
    objetoDto: PuestoPersonaModificacionDto,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        PuestoPersonaModificacionDto,
        PuestoPersona,
      );
      const puestoPersonaBD =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
      if (!puestoPersonaBD || !puestoPersonaBD.esInterinato) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no existe.',
          null,
        );
      }

      if (objeto.fecInicio) {
        objeto.fecInicio = DateTime.fromISO(objeto.fecInicio.toString(), {
          zone: 'UTC-4',
        }).toJSDate();
      }
      if (objeto.fecConclusion) {
        objeto.fecConclusion = DateTime.fromISO(
          objeto.fecConclusion.toString(),
          {
            zone: 'UTC-4',
          },
        ).toJSDate();
      }

      delete objeto.tipoMovilidad;
      delete objeto.esInterinato;
      await this.repositorioFactory.puestoPersonaRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async eliminarInterinato(id: number): Promise<RespuestaDto> {
    const objeto =
      await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
    if (!objeto) {
      return new RespuestaDto(TipoRespuesta.Error, 'El registro no existe.');
    }
    const errores = [];
    const validacion = await this.validar('eliminar', objeto, errores);
    if (!validacion) {
      return new RespuestaDto(TipoRespuesta.Error, errores[0]);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const puestoPersonaBD =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
      if (!puestoPersonaBD || !puestoPersonaBD.esInterinato) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'El registro no existe.',
          null,
        );
      }

      await this.repositorioFactory.puestoPersonaRepositorio.eliminar(
        id,
        transaccion,
        false,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaDto(
        TipoRespuesta.Exito,
        'El registro se ha eliminado con éxito.',
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaDto(TipoRespuesta.Excepcion, error.toString());
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }

  async darBajaInterinato(
    id: number,
  ): Promise<RespuestaObjetoDto<PuestoPersonaDto>> {
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const puestoPersonaBD =
        await this.repositorioFactory.puestoPersonaRepositorio.obtenerPorId(id);
      if (
        !puestoPersonaBD ||
        !puestoPersonaBD.esInterinato ||
        puestoPersonaBD.estado !== 'ACTUAL'
      ) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'No se puede realizar la operación solicitada.',
          null,
        );
      }

      const diferencia = DateTime.fromISO(
        puestoPersonaBD.fecConclusion.toString(),
        {
          zone: 'utc',
        },
      )
        .setZone(DateTime.local().zoneName, { keepLocalTime: true })
        .diffNow('days');

      if (diferencia.days > -1) {
        await this.repositorioFactory.revertir(transaccion);
        return new RespuestaObjetoDto(
          TipoRespuesta.Error,
          'No se puede realizar la operación solicitada.',
          null,
        );
      }

      puestoPersonaBD.estado = 'ANTERIOR';
      await this.repositorioFactory.puestoPersonaRepositorio.modificar(
        id,
        puestoPersonaBD,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(puestoPersonaBD, PuestoPersona, PuestoPersonaDto),
      );
    } catch (error) {
      await this.repositorioFactory.revertir(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Excepcion,
        error.toString(),
        null,
      );
    } finally {
      await this.repositorioFactory.liberar(transaccion);
    }
  }
}

export const PUESTO_PERSONA_SERVICIO_PROVIDER = {
  provide: PUESTO_PERSONA_SERVICIO,
  useClass: PuestoPersonaService,
};

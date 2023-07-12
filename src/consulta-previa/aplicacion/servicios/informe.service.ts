import { Inject, Injectable } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';

import {
  ListaPaginadaDto,
  RespuestaDto,
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../comun/transferencia';

import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura';
import {
  IInformeServicio,
  INFORME_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Informe, Resolucion, SujetoIdentificado } from '../../dominio/entidades';
import { InformeFiltro } from '../../dominio/entidades/filtros';
import {
  InformeCreacionDto,
  InformeDto,
  InformeModificacionDto,
  SujetoIdentificadoDto,
} from '../../dominio/transferencia';
import { InformeFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class InformeService implements IInformeServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Informe> | any,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new InformeFiltro();
        filtro.fk_idTramite = objetoDto.fk_idTramite;
        filtro.correlativo = objetoDto.correlativo;
        filtro.referencia = objetoDto.referencia;
        filtro.informePdf = objetoDto.informePdf;
        filtro.asunto = objetoDto.asunto;
        filtro.encargado = objetoDto.encargado;
        const informeBD =
          await this.repositorioFactory.informeRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (informeBD) {
          errores.push('El número de documento detalle ya existe.');
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
    filtroDto: InformeFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<InformeDto>> {
    const respuesta =
      await this.repositorioFactory.informeRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          InformeFiltroDto,
          InformeFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<InformeDto>(
      this.mapper.mapArray(
        respuesta.lista,
        Informe,
        InformeDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<InformeDto> {
    const objeto =
      await this.repositorioFactory.informeRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Informe, InformeDto);
  }

  async guardar(
    objetoDto: InformeCreacionDto,
  ): Promise<RespuestaObjetoDto<InformeDto>> {
    console.log("asdasd");
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        InformeCreacionDto,
        Informe,
      );

      const informeId =
      await this.repositorioFactory.informeRepositorio.guardar(
        objeto,
        transaccion,
      );
       

     /* if (objeto.listaSujetoIdentificado && objeto.listaSujetoIdentificado.length > 0) {
        objeto.listaSujetoIdentificado.forEach(async (sujetoIdentificado) => {
          sujetoIdentificado.fk_idInforme = informeId;
          await this.repositorioFactory.sujetoIdentificadoRepositorio.guardar(
            sujetoIdentificado,
            transaccion,
          );
        });
      } */


      const resolucion = new Resolucion();
      if(objeto.flujo === 'Identificacion'){
        resolucion.fk_idTramite = objeto.fk_idTramite;
        resolucion.informe = null;
        resolucion.resolucion = null;
        resolucion.informeAprobado = false;
        resolucion.actoAdministrativo = false;
        resolucion.resolucionPdf = null;
        resolucion.flujo = 'Deliberacion';
        await this.repositorioFactory.resolucionRepositorio.guardar(
          resolucion,
          transaccion,
        );

      }
      else{
        if(objeto.flujo === 'Deliberacion'){
          resolucion.fk_idTramite = objeto.fk_idTramite;
          resolucion.informe = null;
          resolucion.resolucion = null;
          resolucion.informeAprobado = false;
          resolucion.actoAdministrativo = false;
          resolucion.resolucionPdf = null;
          resolucion.flujo = 'Mediacion';
          await this.repositorioFactory.resolucionRepositorio.guardar(
            resolucion,
            transaccion,
          );
        }
      }
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha guardado con éxito.',
        this.mapper.map(objeto, Informe, InformeDto),
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

  async modificar(
    id: number,
    objetoDto: InformeModificacionDto,
  ): Promise<RespuestaObjetoDto<InformeDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        InformeModificacionDto,
        Informe,
      );
      await this.repositorioFactory.informeRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Informe, InformeDto),
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

  async eliminar(id: number): Promise<RespuestaDto> {
    const objeto =
      await this.repositorioFactory.informeRepositorio.obtenerPorId(
        id,
      );
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
      await this.repositorioFactory.informeRepositorio.eliminar(
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
}

export const INFORME_SERVICIO_PROVIDER = {
  provide: INFORME_SERVICIO,
  useClass: InformeService,
};

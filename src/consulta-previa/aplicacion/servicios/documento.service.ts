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
  IDocumentoServicio,
  DOCUMENTO_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import { Documento, Resolucion, SujetoIdentificado } from '../../dominio/entidades';
import { DocumentoFiltro } from '../../dominio/entidades/filtros';
import {
  DocumentoCreacionDto,
  DocumentoDto,
  DocumentoModificacionDto,
} from '../../dominio/transferencia';
import { DocumentoFiltroDto } from '../../dominio/transferencia/filtros';

@Injectable()
export class DocumentoService implements IDocumentoServicio {
  constructor(
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  private async validar(
    operacion: string,
    objetoDto: Partial<Documento>,
    errores = [],
  ): Promise<any> {
    switch (operacion) {
      case 'guardar': {
        const filtro = new DocumentoFiltro();
        filtro.fk_idTramite = objetoDto.fk_idTramite;
        filtro.correlativo = objetoDto.correlativo;
        filtro.referencia = objetoDto.referencia;
        filtro.documentoPdf = objetoDto.documentoPdf;
        const documentoBD =
          await this.repositorioFactory.documentoRepositorio.obtenerObjetoPor(
            filtro,
          );
        if (documentoBD) {
          errores.push('El correlativo de documento ya existe.');
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
    filtroDto: DocumentoFiltroDto,
    pagina: number,
    cantidad: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginadaDto<DocumentoDto>> {
    const respuesta =
      await this.repositorioFactory.documentoRepositorio.obtenerPor(
        this.mapper.map(
          filtroDto,
          DocumentoFiltroDto,
          DocumentoFiltro,
        ),
        pagina,
        cantidad,
        ordenarPor,
        orden,
      );
    return new ListaPaginadaDto<DocumentoDto>(
      this.mapper.mapArray(
        respuesta.lista,
        Documento,
        DocumentoDto,
      ),
      respuesta.totalRegistros,
    );
  }

  async obtenerPorId(id: number): Promise<DocumentoDto> {
    const objeto =
      await this.repositorioFactory.documentoRepositorio.obtenerPorId(
        id,
      );
    if (objeto === undefined) return null;
    return this.mapper.map(objeto, Documento, DocumentoDto);
  }

  async guardar(
    objetoDto: DocumentoCreacionDto | any,
  ): Promise<RespuestaObjetoDto<DocumentoDto>> {
    const errores = [];
    const validacion = await this.validar('guardar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        DocumentoCreacionDto,
        Documento,
      );
      const documentoId = await this.repositorioFactory.documentoRepositorio.guardar(
        objeto,
        transaccion,
      );
      const sujeto =  new SujetoIdentificado();
      if(objetoDto.listaSujetoIdentificado && objetoDto.listaSujetoIdentificado.length > 0){
        for (let index = 0; index < objetoDto.listaSujetoIdentificado.length; index++) {
          sujeto.fk_idDocumento = documentoId;
          sujeto.comunidad = objetoDto.listaSujetoIdentificado[index].comunidad;
          sujeto.autoridad = objetoDto.listaSujetoIdentificado[index].autoridad;
          sujeto.telefono = objetoDto.listaSujetoIdentificado[index].telefono;
  
            await this.repositorioFactory.sujetoIdentificadoRepositorio.guardar(
              sujeto,
              transaccion,
            );
          
        }
      }
      const resolucion = new Resolucion();
      if(objeto.flujo === 'Identificacion' && objeto.tipoDocumento === 'Informe Social'){
        resolucion.fk_idTramite = objeto.fk_idTramite;
        resolucion.informe = objeto.correlativo;
        resolucion.correlativo = null;
        resolucion.informeAprobado = false;
        resolucion.actoAdministrativo = false;
        resolucion.resolucionPdf = null;
        resolucion.flujo = 'Deliberacion';
        resolucion.referencia = null;
        await this.repositorioFactory.resolucionRepositorio.guardar(
          resolucion,
          transaccion,
        );

      }
      else{
        if(objeto.flujo === 'Deliberacion' && objeto.tipoDocumento !== 'Auto'){
          resolucion.fk_idTramite = objeto.fk_idTramite;
          resolucion.informe = objeto.correlativo;
          resolucion.correlativo = null;
          resolucion.informeAprobado = false;
          resolucion.actoAdministrativo = false;
          resolucion.resolucionPdf = null;
          resolucion.flujo = 'Mediacion';
          resolucion.referencia = null;
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
        this.mapper.map(objeto, Documento, DocumentoDto),
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
    objetoDto: DocumentoModificacionDto,
  ): Promise<RespuestaObjetoDto<DocumentoDto>> {
    const errores = [];
    const validacion = await this.validar('modificar', objetoDto, errores);
    if (!validacion) {
      return new RespuestaObjetoDto(TipoRespuesta.Error, errores[0], null);
    }
    const transaccion = await this.repositorioFactory.iniciarTransaccion();
    try {
      const objeto = this.mapper.map(
        objetoDto,
        DocumentoModificacionDto,
        Documento,
      );
      await this.repositorioFactory.documentoRepositorio.modificar(
        id,
        objeto,
        transaccion,
      );
      await this.repositorioFactory.confirmar(transaccion);
      return new RespuestaObjetoDto(
        TipoRespuesta.Exito,
        'El registro se ha modificado con éxito.',
        this.mapper.map(objeto, Documento, DocumentoDto),
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
      await this.repositorioFactory.documentoRepositorio.obtenerPorId(
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
      await this.repositorioFactory.documentoRepositorio.eliminar(
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

export const DOCUMENTO_SERVICIO_PROVIDER = {
  provide: DOCUMENTO_SERVICIO,
  useClass: DocumentoService,
};

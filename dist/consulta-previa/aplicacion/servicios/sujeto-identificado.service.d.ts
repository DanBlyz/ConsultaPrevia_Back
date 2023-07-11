import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { ISujetoIdentificadoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { SujetoIdentificadoCreacionDto, SujetoIdentificadoDto, SujetoIdentificadoModificacionDto } from '../../dominio/transferencia';
import { SujetoIdentificadoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class SujetoIdentificadoService implements ISujetoIdentificadoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: SujetoIdentificadoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<SujetoIdentificadoDto>>;
    obtenerPorId(id: number): Promise<SujetoIdentificadoDto>;
    guardar(objetoDto: SujetoIdentificadoCreacionDto): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>>;
    modificar(id: number, objetoDto: SujetoIdentificadoModificacionDto): Promise<RespuestaObjetoDto<SujetoIdentificadoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const SUJETO_IDENTIFICADO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof SujetoIdentificadoService;
};

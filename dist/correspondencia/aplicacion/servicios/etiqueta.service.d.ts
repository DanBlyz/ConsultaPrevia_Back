import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IEtiquetaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { Etiqueta } from '../../dominio/entidades';
import { EtiquetaCreacionDto, EtiquetaDto, EtiquetaModificacionDto } from '../../dominio/transferencia';
import { EtiquetaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class EtiquetaService implements IEtiquetaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: EtiquetaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<Etiqueta>>;
    obtenerPorId(id: number): Promise<EtiquetaDto>;
    guardar(objetoDto: EtiquetaCreacionDto): Promise<RespuestaObjetoDto<EtiquetaDto>>;
    modificar(id: number, objetoDto: EtiquetaModificacionDto): Promise<RespuestaObjetoDto<EtiquetaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const ETIQUETA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof EtiquetaService;
};

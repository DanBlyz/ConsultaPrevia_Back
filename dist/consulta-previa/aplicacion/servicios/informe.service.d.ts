import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IInformeServicio } from '../../dominio/contratos/aplicacion/servicios';
import { InformeCreacionDto, InformeDto, InformeModificacionDto } from '../../dominio/transferencia';
import { InformeFiltroDto } from '../../dominio/transferencia/filtros';
export declare class InformeService implements IInformeServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: InformeFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<InformeDto>>;
    obtenerPorId(id: number): Promise<InformeDto>;
    guardar(objetoDto: InformeCreacionDto): Promise<RespuestaObjetoDto<InformeDto>>;
    modificar(id: number, objetoDto: InformeModificacionDto): Promise<RespuestaObjetoDto<InformeDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const INFORME_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof InformeService;
};

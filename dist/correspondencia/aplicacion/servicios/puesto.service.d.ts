import { Mapper } from '@automapper/core';
import { ListaPaginadaDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IPuestoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { PuestoDto } from '../../dominio/transferencia';
import { PuestoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class PuestoService implements IPuestoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    buscar(filtroDto: PuestoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PuestoDto>>;
    obtenerPorId(id: number): Promise<PuestoDto>;
}
export declare const PUESTO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof PuestoService;
};

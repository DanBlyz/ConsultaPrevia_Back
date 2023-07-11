import { ListaPaginadaDto } from '../../../../../comun/transferencia';
import { PuestoDto } from '../../../transferencia';
import { PuestoFiltroDto } from '../../../transferencia/filtros';
export declare const PUESTO_SERVICIO = "PUESTO_SERVICIO";
export interface IPuestoServicio {
    buscar(filtroDto: PuestoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<PuestoDto>>;
    obtenerPorId(id: number): Promise<PuestoDto>;
}

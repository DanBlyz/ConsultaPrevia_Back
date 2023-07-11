import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../../../comun/transferencia';
import { ContactoCreacionDto, ContactoDto, ContactoModificacionDto } from '../../../transferencia';
import { ContactoFiltroDto } from '../../../transferencia/filtros';
export declare const CONTACTO_SERVICIO = "CONTACTO_SERVICIO";
export interface IContactoServicio {
    buscar(filtroDto: ContactoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ContactoDto>>;
    obtenerPorId(id: number): Promise<ContactoDto>;
    guardar(objetoDto: ContactoCreacionDto): Promise<RespuestaObjetoDto<ContactoDto>>;
    modificar(id: number, objetoDto: ContactoModificacionDto): Promise<RespuestaObjetoDto<ContactoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}

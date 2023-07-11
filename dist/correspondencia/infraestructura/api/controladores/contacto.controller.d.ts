import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { ContactoFiltroDto } from '../../../dominio/transferencia/filtros';
import { ContactoCreacionDto, ContactoDto, ContactoModificacionDto } from '../../../dominio/transferencia';
export declare class ContactoController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: ContactoFiltroDto): Promise<RespuestaListaDto<ContactoDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<ContactoDto>>;
    guardar(objetoDto: ContactoCreacionDto): Promise<RespuestaObjetoDto<ContactoDto>>;
    modificar(id: number, objetoDto: ContactoModificacionDto): Promise<RespuestaObjetoDto<ContactoDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}

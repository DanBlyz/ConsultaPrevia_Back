import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { ActoAdministrativoFiltroDto } from '../../../dominio/transferencia/filtros';
import { ActoAdministrativoCreacionDto, ActoAdministrativoDto, ActoAdministrativoModificacionDto } from '../../../dominio/transferencia';
export declare class ActoAdministrativoController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    buscar(filtroDto: ActoAdministrativoFiltroDto): Promise<RespuestaListaDto<ActoAdministrativoDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<ActoAdministrativoDto>>;
    guardar(objetoDto: ActoAdministrativoCreacionDto): Promise<RespuestaObjetoDto<ActoAdministrativoDto>>;
    modificar(id: number, objetoDto: ActoAdministrativoModificacionDto): Promise<RespuestaObjetoDto<ActoAdministrativoDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}

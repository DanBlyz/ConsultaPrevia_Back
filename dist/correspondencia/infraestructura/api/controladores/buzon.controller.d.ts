import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { BuzonFiltroDto } from '../../../dominio/transferencia/filtros';
import { BuzonCreacionDto, BuzonDto, BuzonModificacionDto, BuzonUsuarioCreacionDto, BuzonUsuarioDto, BuzonUsuarioModificacionDto } from '../../../dominio/transferencia';
export declare class BuzonController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    obtenerPorRefUniOrganizacionalId(refUniOrganizazionalId: number): Promise<RespuestaListaDto<BuzonDto>>;
    buscar(filtroDto: BuzonFiltroDto): Promise<RespuestaListaDto<BuzonDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<BuzonDto>>;
    guardar(objetoDto: BuzonCreacionDto): Promise<RespuestaObjetoDto<BuzonDto>>;
    modificar(id: number, objetoDto: BuzonModificacionDto): Promise<RespuestaObjetoDto<BuzonDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    obtenerBuzonUsuarioPorBuzonId(buzonId: number): Promise<RespuestaListaDto<BuzonUsuarioDto>>;
    obtenerBuzonUsuarioPorId(buzonId: number, id: number): Promise<RespuestaObjetoDto<BuzonUsuarioDto>>;
    guardarBuzonUsuario(buzonId: number, objetoDto: BuzonUsuarioCreacionDto): Promise<RespuestaObjetoDto<BuzonUsuarioDto>>;
    modificarBuzonUsuario(buzonId: number, id: number, objetoDto: BuzonUsuarioModificacionDto): Promise<RespuestaObjetoDto<BuzonUsuarioDto>>;
    eliminarBuzonUsuario(buzonId: number, id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
}

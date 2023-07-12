import { RespuestaListaDto, RespuestaObjetoDto } from '../../../../comun/transferencia';
import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { FotografiaCreacionDto, InfoLaboralModificacionDto, PersonaCreacionDto, PersonaDto, PersonaModificacionDto, PuestoPersonaCreacionDto, PuestoPersonaDto, PuestoPersonaModificacionDto } from '../../../dominio/transferencia';
import { PersonaFiltroDto } from '../../../dominio/transferencia/filtros';
export declare class PersonaController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    directorio(filtro: Partial<PersonaFiltroDto>): Promise<RespuestaListaDto<PersonaDto>>;
    buscar(filtroDto: PersonaFiltroDto): Promise<RespuestaListaDto<PersonaDto>>;
    obtenerPorId(id: number): Promise<RespuestaObjetoDto<PersonaDto>>;
    guardar(objetoDto: PersonaCreacionDto): Promise<RespuestaObjetoDto<PersonaDto>>;
    modificar(id: number, objetoDto: PersonaModificacionDto): Promise<RespuestaObjetoDto<PersonaDto>>;
    eliminar(id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    obtenerFotografiaPorCodigo(personaCodigo: string, response: any): Promise<any>;
    guardarFotografia(personaId: number, objetoDto: FotografiaCreacionDto): Promise<RespuestaObjetoDto<import("../../../dominio/transferencia").FotografiaDto>>;
    eliminarFotografia(personaId: number, id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    modificarInfoLaboral(personaId: number, objetoDto: InfoLaboralModificacionDto): Promise<RespuestaObjetoDto<import("../../../dominio/transferencia").InfoLaboralDto>>;
    obtenerPuestoPersonaPorPersonaId(personaId: number): Promise<RespuestaListaDto<PuestoPersonaDto>>;
    obtenerPuestoPersonaPorId(id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    modificarPuestoPersona(personaId: number, id: number, objetoDto: PuestoPersonaModificacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    guardarIncorporacion(personaId: number, objetoDto: PuestoPersonaCreacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    guardarReasignacion(personaId: number, objetoDto: PuestoPersonaCreacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    registrarDesvinculacion(personaId: number, id: number, objetoDto: any): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    darBaja(personaId: number, id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    anularMovilidad(personaId: number, id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    guardarInterinato(personaId: number, objetoDto: PuestoPersonaCreacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    modificarInterinato(personaId: number, id: number, objetoDto: PuestoPersonaModificacionDto): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
    eliminarInterinato(personaId: number, id: number): Promise<import("../../../../comun/transferencia").RespuestaDto>;
    darBajaInterinato(personaId: number, id: number): Promise<RespuestaObjetoDto<PuestoPersonaDto>>;
}
import { IRepositorio } from './base/repositorio.interface';
import { Persona } from '../../../../entidades';
import { PersonaFiltro } from '../../../../entidades/filtros';
export interface IPersonaRepositorio extends IRepositorio<Persona, PersonaFiltro> {
}

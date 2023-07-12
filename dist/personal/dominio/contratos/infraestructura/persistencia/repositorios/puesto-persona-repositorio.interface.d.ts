import { IRepositorio } from './base/repositorio.interface';
import { PuestoPersona } from '../../../../entidades';
import { PuestoPersonaFiltro } from '../../../../entidades/filtros';
export interface IPuestoPersonaRepositorio extends IRepositorio<PuestoPersona, PuestoPersonaFiltro> {
}

import { IRepositorio } from './base/repositorio.interface';
import { Contacto } from '../../../entidades';
import { ContactoFiltro } from '../../../entidades/filtros';
export interface IContactoRepositorio extends IRepositorio<Contacto, ContactoFiltro> {
}

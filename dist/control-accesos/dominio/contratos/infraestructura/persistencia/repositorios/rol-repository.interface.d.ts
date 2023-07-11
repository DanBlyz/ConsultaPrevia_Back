import { IRepositorio } from './base/repositorio.interface';
import { Rol } from '../../../../entidades';
export interface IRolRepository extends IRepositorio<Rol, Partial<Rol>> {
}

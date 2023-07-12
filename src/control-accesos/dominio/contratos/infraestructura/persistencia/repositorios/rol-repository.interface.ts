import { IRepositorio } from './base/repositorio.interface';

import { Rol } from '../../../../entidades';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRolRepository extends IRepositorio<Rol, Partial<Rol>> {}

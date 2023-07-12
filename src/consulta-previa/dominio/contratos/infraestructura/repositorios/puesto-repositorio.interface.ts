import { ListaPaginada } from '../../../../../comun/modelos';

import { Puesto } from '../../../entidades';
import { PuestoFiltro } from '../../../entidades/filtros';

export interface IPuestoRepositorio {
  obtenerPorId(id: number): Promise<Puesto>;
  obtenerObjetoPor(
    filtro: PuestoFiltro,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<Puesto>;
  obtenerPor(
    filtro: PuestoFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<ListaPaginada<Puesto>>;
}

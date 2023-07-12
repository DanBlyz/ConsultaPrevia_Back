import { ListaPaginada } from '../../../../../comun/modelos';

import { Persona } from '../../../entidades';
import { PersonaFiltro } from '../../../entidades/filtros';

export interface IPersonaRepositorio {
  obtenerPorId(id: number): Promise<Persona>;
  obtenerObjetoPor(
    filtro: PersonaFiltro,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<Persona>;
  obtenerPor(
    filtro: PersonaFiltro,
    pagina: number,
    cantidad: number,
    ordenarPor?: string,
    orden?: 'ASC' | 'DESC',
  ): Promise<ListaPaginada<Persona>>;
}

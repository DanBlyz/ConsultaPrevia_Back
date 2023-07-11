import { IRepositorio } from './base/repositorio.interface';
import { HojaRuta } from '../../../entidades';
import { HojaRutaFiltro } from '../../../entidades/filtros';
export interface IHojaRutaRepositorio extends IRepositorio<HojaRuta, HojaRutaFiltro> {
    obtenerCorrelativo(gestion: number): Promise<number>;
}

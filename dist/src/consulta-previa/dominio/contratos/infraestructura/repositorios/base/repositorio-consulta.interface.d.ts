import { ListaPaginada } from '../../../../../../comun/modelos';
export interface IRepositorioConsulta<T, TFiltro> {
    obtenerPorId(id: number): Promise<T>;
    obtenerObjetoPor(filtro: TFiltro): Promise<T>;
    obtenerPor(filtro: TFiltro, pagina: number, cantidad: number): Promise<ListaPaginada<T>>;
}

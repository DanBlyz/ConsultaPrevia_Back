import { IRepositorio } from './base/repositorio.interface';
import { SujetoIdentificado } from '../../../entidades';
import { SujetoIdentificadoFiltro } from '../../../entidades/filtros';
export interface ISujetoIdentificadoRepositorio extends IRepositorio<SujetoIdentificado, SujetoIdentificadoFiltro> {
}

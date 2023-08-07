import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IParametroServicio } from '../../dominio/contratos/aplicacion/servicios';
import { Parametro } from '../../dominio/entidades';
import { ParametroCreacionDto, ParametroDto, ParametroModificacionDto } from '../../dominio/transferencia';
import { ParametroFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ParametroService implements IParametroServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ParametroFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ParametroDto>>;
    obtenerPorId(id: number): Promise<ParametroDto>;
    guardar(objetoDto: ParametroCreacionDto): Promise<RespuestaObjetoDto<ParametroDto>>;
    modificar(id: number, objetoDto: ParametroModificacionDto): Promise<RespuestaObjetoDto<Parametro>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const PARAMETRO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ParametroService;
};

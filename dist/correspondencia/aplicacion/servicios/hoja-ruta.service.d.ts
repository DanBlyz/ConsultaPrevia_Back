import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IHojaRutaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { HojaRuta } from '../../dominio/entidades';
import { HojaRutaCreacionDto, HojaRutaDto, HojaRutaModificacionDto } from '../../dominio/transferencia';
import { HojaRutaFiltroDto } from '../../dominio/transferencia/filtros';
export declare class HojaRutaService implements IHojaRutaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: HojaRutaFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<HojaRuta>>;
    obtenerPorId(id: number): Promise<HojaRutaDto>;
    guardar(objetoDto: HojaRutaCreacionDto): Promise<RespuestaObjetoDto<HojaRutaDto>>;
    modificar(id: number, objetoDto: HojaRutaModificacionDto): Promise<RespuestaObjetoDto<HojaRuta>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const HOJA_RUTA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof HojaRutaService;
};

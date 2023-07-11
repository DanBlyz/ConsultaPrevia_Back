import { Mapper } from '@automapper/core';
import { ListaPaginadaDto, RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IContactoServicio } from '../../dominio/contratos/aplicacion/servicios';
import { ContactoCreacionDto, ContactoDto, ContactoModificacionDto } from '../../dominio/transferencia';
import { ContactoFiltroDto } from '../../dominio/transferencia/filtros';
export declare class ContactoService implements IContactoServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    buscar(filtroDto: ContactoFiltroDto, pagina: number, cantidad: number, ordenarPor?: string, orden?: 'ASC' | 'DESC'): Promise<ListaPaginadaDto<ContactoDto>>;
    obtenerPorId(id: number): Promise<ContactoDto>;
    guardar(objetoDto: ContactoCreacionDto): Promise<RespuestaObjetoDto<ContactoDto>>;
    modificar(id: number, objetoDto: ContactoModificacionDto): Promise<RespuestaObjetoDto<ContactoDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const CONTACTO_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof ContactoService;
};

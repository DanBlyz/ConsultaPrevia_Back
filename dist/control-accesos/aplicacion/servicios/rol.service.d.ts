import { Mapper } from '@automapper/core';
import { RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IRolServicio } from '../../dominio/contratos/aplicacion/servicios';
import { RolCreacionDto, RolDto, RolModificacionDto } from '../../dominio/transferencia';
export declare class RolService implements IRolServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    obtenerTodo(): Promise<RolDto[]>;
    obtenerPorId(id: number): Promise<RolDto>;
    guardar(objetoDto: RolCreacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    modificar(id: number, objetoDto: RolModificacionDto): Promise<RespuestaObjetoDto<RolDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const ROL_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof RolService;
};

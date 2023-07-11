import { Mapper } from '@automapper/core';
import { RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IRolCuentaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { RolCuentaCreacionDto, RolCuentaDto, RolCuentaModificacionDto } from '../../dominio/transferencia';
export declare class RolCuentaService implements IRolCuentaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    obtenerporCuentaId(cuentaId: number): Promise<RolCuentaDto[]>;
    obtenerPorId(id: number): Promise<RolCuentaDto>;
    guardar(objetoDto: RolCuentaCreacionDto): Promise<RespuestaObjetoDto<RolCuentaDto>>;
    modificar(id: number, objetoDto: RolCuentaModificacionDto): Promise<RespuestaObjetoDto<RolCuentaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
}
export declare const ROL_CUENTA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof RolCuentaService;
};

import { Mapper } from '@automapper/core';
import { RespuestaDto, RespuestaObjetoDto } from '../../../comun/transferencia';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { IFotografiaServicio } from '../../dominio/contratos/aplicacion/servicios';
import { FotografiaCreacionDto, FotografiaDto } from '../../dominio/transferencia';
export declare class FotografiaService implements IFotografiaServicio {
    private repositorioFactory;
    private readonly mapper;
    constructor(repositorioFactory: IRepositorioFactory, mapper: Mapper);
    private validar;
    obtenerPorId(id: number): Promise<FotografiaDto>;
    guardar(objetoDto: FotografiaCreacionDto): Promise<RespuestaObjetoDto<FotografiaDto>>;
    eliminar(id: number): Promise<RespuestaDto>;
    obtenerPorCodigo(codigo: string): Promise<FotografiaDto>;
}
export declare const FOTOGRAFIA_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof FotografiaService;
};

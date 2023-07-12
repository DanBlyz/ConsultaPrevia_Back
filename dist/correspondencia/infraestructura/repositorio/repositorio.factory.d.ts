import { Mapper } from '@automapper/core';
import { HttpService } from '@nestjs/axios';
import { Connection, QueryRunner } from 'typeorm';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura';
import { IAdjuntoRepositorio, IBuzonRepositorio, IBuzonUsuarioRepositorio, IClasificacionBuzonRepositorio, IClasificacionRepositorio, IContactoRepositorio, IContenidoDetalleRepositorio, IContenidoRepositorio, IDocumentoDetalleRepositorio, IDocumentoRepositorio, IDocumentoSeguimientoRepositorio, IEtiquetaRepositorio, IHojaRutaRepositorio, INotaRepositorio, IParticipanteRepositorio, IPersonaRepositorio, IPlantillaRepositorio, IPuestoRepositorio, ISeguimientoRepositorio, ITipoDocumentoRepositorio, IUniOrganizacionalRepositorio, IGrupoRepositorio, IRolRepositorio, ICuentaRepositorio, IRolCuentaRepositorio, IUsuarioRepositorio, IPruebaRepositorio } from '../../dominio/contratos/infraestructura/repositorios';
export declare class RepositorioFactory implements IRepositorioFactory {
    private conexion;
    private httpService;
    private readonly mapper;
    adjuntoRepositorio: IAdjuntoRepositorio;
    buzonUsuarioRepositorio: IBuzonUsuarioRepositorio;
    buzonRepositorio: IBuzonRepositorio;
    clasificacionBuzonRepositorio: IClasificacionBuzonRepositorio;
    clasificacionRepositorio: IClasificacionRepositorio;
    contactoRepositorio: IContactoRepositorio;
    contenidoDetalleRepositorio: IContenidoDetalleRepositorio;
    contenidoRepositorio: IContenidoRepositorio;
    documentoDetalleRepositorio: IDocumentoDetalleRepositorio;
    documentoSeguimientoRepositorio: IDocumentoSeguimientoRepositorio;
    documentoRepositorio: IDocumentoRepositorio;
    etiquetaRepositorio: IEtiquetaRepositorio;
    hojaRutaRepositorio: IHojaRutaRepositorio;
    notaRepositorio: INotaRepositorio;
    participanteRepositorio: IParticipanteRepositorio;
    personaRepositorio: IPersonaRepositorio;
    plantillaRepositorio: IPlantillaRepositorio;
    puestoRepositorio: IPuestoRepositorio;
    seguimientoRepositorio: ISeguimientoRepositorio;
    tipoDocumentoRepositorio: ITipoDocumentoRepositorio;
    uniOrganizacionalRepositorio: IUniOrganizacionalRepositorio;
    grupoRepositorio: IGrupoRepositorio;
    rolRepositorio: IRolRepositorio;
    cuentaRepositorio: ICuentaRepositorio;
    rolCuentaRepositorio: IRolCuentaRepositorio;
    usuarioRepositorio: IUsuarioRepositorio;
    pruebaRepositorio: IPruebaRepositorio;
    constructor(conexion: Connection, httpService: HttpService, mapper: Mapper);
    iniciarTransaccion(): Promise<QueryRunner>;
    confirmar(transaccion: QueryRunner): Promise<void>;
    revertir(transaccion: QueryRunner): Promise<void>;
    liberar(transaccion: QueryRunner): Promise<void>;
    static registrarError(instancia: string, error: any): void;
}
export declare const REPOSITORIO_FACTORY_PROVIDER: {
    provide: string;
    useClass: typeof RepositorioFactory;
};

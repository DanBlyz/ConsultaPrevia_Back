import { IServicioFactory } from '../../dominio/contratos/aplicacion';
import { ITramiteServicio, IInformeServicio, ISujetoIdentificadoServicio, INotificacionServicio, IReunionServicio, IResolucionServicio, IActoAdministrativoServicio, IPagoCptServicio, IViajeServicio, IProvidenciaServicio, IDocumentoServicio } from '../../dominio/contratos/aplicacion/servicios';
export declare class ServicioFactory implements IServicioFactory {
    tramiteServicio: ITramiteServicio;
    informeServicio: IInformeServicio;
    sujetoIdentificadoServicio: ISujetoIdentificadoServicio;
    notificacionServicio: INotificacionServicio;
    reunionServicio: IReunionServicio;
    resolucionServicio: IResolucionServicio;
    ActoAdministrativoServicio: IActoAdministrativoServicio;
    pagoCptServicio: IPagoCptServicio;
    viajeServicio: IViajeServicio;
    providenciaServicio: IProvidenciaServicio;
    documentoServicio: IDocumentoServicio;
    constructor(tramiteServicio: ITramiteServicio, informeServicio: IInformeServicio, sujetoIdentificadoServicio: ISujetoIdentificadoServicio, notificacionServicio: INotificacionServicio, reunionServicio: IReunionServicio, resolucionServicio: IResolucionServicio, ActoAdministrativoServicio: IActoAdministrativoServicio, pagoCptServicio: IPagoCptServicio, viajeServicio: IViajeServicio, providenciaServicio: IProvidenciaServicio, documentoServicio: IDocumentoServicio);
}
export declare const SERVICIO_FACTORY_PROVIDER: {
    provide: string;
    useClass: typeof ServicioFactory;
};

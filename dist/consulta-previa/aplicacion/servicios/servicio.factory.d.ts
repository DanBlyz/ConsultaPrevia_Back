import { IServicioFactory } from '../../dominio/contratos/aplicacion';
import { ITramiteServicio, IInformeServicio, ISujetoIdentificadoServicio, INotificacionServicio, IReunionServicio, IResolucionServicio, IActoAdministrativoServicio, IPagoCptServicio, IViajeServicio, IProvidenciaServicio } from '../../dominio/contratos/aplicacion/servicios';
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
    constructor(tramiteServicio: ITramiteServicio, informeServicio: IInformeServicio, sujetoIdentificadoServicio: ISujetoIdentificadoServicio, notificacionServicio: INotificacionServicio, reunionServicio: IReunionServicio, resolucionServicio: IResolucionServicio, ActoAdministrativoServicio: IActoAdministrativoServicio, pagoCptServicio: IPagoCptServicio, viajeServicio: IViajeServicio, providenciaServicio: IProvidenciaServicio);
}
export declare const SERVICIO_FACTORY_PROVIDER: {
    provide: string;
    useClass: typeof ServicioFactory;
};

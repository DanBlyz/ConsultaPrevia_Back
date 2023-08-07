import { ITramiteServicio, IInformeServicio, ISujetoIdentificadoServicio, INotificacionServicio, IReunionServicio, IResolucionServicio, IActoAdministrativoServicio, IPagoCptServicio, IViajeServicio, IProvidenciaServicio } from './servicios';
export declare const SERVICIO_FACTORY = "SERVICIO_FACTORY";
export interface IServicioFactory {
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
}

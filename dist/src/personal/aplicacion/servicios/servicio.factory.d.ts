import { IServicioFactory } from '../../dominio/contratos/aplicacion';
import { IFotografiaServicio, IInfoLaboralServicio, IParametroServicio, IPersonaServicio, IPuestoPersonaServicio, IPuestoServicio, IUniOrganizacionalServicio } from '../../dominio/contratos/aplicacion/servicios';
export declare class ServicioFactory implements IServicioFactory {
    fotografiaServicio: IFotografiaServicio;
    infoLaboralServicio: IInfoLaboralServicio;
    parametroServicio: IParametroServicio;
    personaServicio: IPersonaServicio;
    puestoServicio: IPuestoServicio;
    puestoPersonaServicio: IPuestoPersonaServicio;
    uniOrganizacionalServicio: IUniOrganizacionalServicio;
    constructor(fotografiaServicio: IFotografiaServicio, infoLaboralServicio: IInfoLaboralServicio, parametroServicio: IParametroServicio, personaServicio: IPersonaServicio, puestoServicio: IPuestoServicio, puestoPersonaServicio: IPuestoPersonaServicio, uniOrganizacionalServicio: IUniOrganizacionalServicio);
}
export declare const SERVICIO_FACTORY_PROVIDER: {
    provide: string;
    useClass: typeof ServicioFactory;
};

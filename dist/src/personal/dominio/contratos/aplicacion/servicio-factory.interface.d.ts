import { IFotografiaServicio, IInfoLaboralServicio, IParametroServicio, IPersonaServicio, IPuestoPersonaServicio, IPuestoServicio, IUniOrganizacionalServicio } from './servicios';
export declare const SERVICIO_FACTORY = "SERVICIO_FACTORY";
export interface IServicioFactory {
    fotografiaServicio: IFotografiaServicio;
    infoLaboralServicio: IInfoLaboralServicio;
    parametroServicio: IParametroServicio;
    personaServicio: IPersonaServicio;
    puestoServicio: IPuestoServicio;
    puestoPersonaServicio: IPuestoPersonaServicio;
    uniOrganizacionalServicio: IUniOrganizacionalServicio;
}

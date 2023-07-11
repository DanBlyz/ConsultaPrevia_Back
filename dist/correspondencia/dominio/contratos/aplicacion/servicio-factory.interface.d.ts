import { IAdjuntoServicio, IBuzonServicio, IBuzonUsuarioServicio, IClasificacionBuzonServicio, IClasificacionServicio, IContactoServicio, IContenidoDetalleServicio, IContenidoServicio, IDocumentoDetalleServicio, IDocumentoSeguimientoServicio, IDocumentoServicio, IEtiquetaServicio, IHojaRutaServicio, INotaServicio, IParticipanteServicio, IPersonaServicio, IPlantillaServicio, IPuestoServicio, ISeguimientoServicio, ITipoDocumentoServicio, IUniOrganizacionalServicio, IGrupoServicio, IRolServicio, ICuentaServicio, IRolCuentaServicio, IUsuarioServicio, IPruebaServicio } from './servicios';
export declare const SERVICIO_FACTORY = "SERVICIO_FACTORY";
export interface IServicioFactory {
    adjuntoServicio: IAdjuntoServicio;
    buzonUsuarioServicio: IBuzonUsuarioServicio;
    buzonServicio: IBuzonServicio;
    clasificacionBuzonServicio: IClasificacionBuzonServicio;
    clasificacionServicio: IClasificacionServicio;
    contactoServicio: IContactoServicio;
    contenidoDetalleServicio: IContenidoDetalleServicio;
    contenidoServicio: IContenidoServicio;
    documentoDetalleServicio: IDocumentoDetalleServicio;
    documentoSeguimientoServicio: IDocumentoSeguimientoServicio;
    documentoServicio: IDocumentoServicio;
    etiquetaServicio: IEtiquetaServicio;
    hojaRutaServicio: IHojaRutaServicio;
    notaServicio: INotaServicio;
    participanteServicio: IParticipanteServicio;
    personaServicio: IPersonaServicio;
    plantillaServicio: IPlantillaServicio;
    puestoServicio: IPuestoServicio;
    seguimientoServicio: ISeguimientoServicio;
    tipoDocumentoServicio: ITipoDocumentoServicio;
    uniOrganizacionalServicio: IUniOrganizacionalServicio;
    grupoServicio: IGrupoServicio;
    rolServicio: IRolServicio;
    cuentaServicio: ICuentaServicio;
    rolCuentaServicio: IRolCuentaServicio;
    usuarioServicio: IUsuarioServicio;
    pruebaServicio: IPruebaServicio;
}
import { IServicioFactory } from '../../dominio/contratos/aplicacion';
import { IAdjuntoServicio, IBuzonServicio, IBuzonUsuarioServicio, IClasificacionBuzonServicio, IClasificacionServicio, IContactoServicio, IContenidoDetalleServicio, IContenidoServicio, IDocumentoDetalleServicio, IDocumentoSeguimientoServicio, IDocumentoServicio, IEtiquetaServicio, IHojaRutaServicio, INotaServicio, IParticipanteServicio, IPersonaServicio, IPlantillaServicio, IPuestoServicio, ISeguimientoServicio, ITipoDocumentoServicio, IUniOrganizacionalServicio, IGrupoServicio, IRolServicio, ICuentaServicio, IRolCuentaServicio, IUsuarioServicio, IPruebaServicio } from '../../dominio/contratos/aplicacion/servicios';
export declare class ServicioFactory implements IServicioFactory {
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
    constructor(adjuntoServicio: IAdjuntoServicio, buzonUsuarioServicio: IBuzonUsuarioServicio, buzonServicio: IBuzonServicio, clasificacionBuzonServicio: IClasificacionBuzonServicio, clasificacionServicio: IClasificacionServicio, contactoServicio: IContactoServicio, contenidoDetalleServicio: IContenidoDetalleServicio, contenidoServicio: IContenidoServicio, documentoDetalleServicio: IDocumentoDetalleServicio, documentoSeguimientoServicio: IDocumentoSeguimientoServicio, documentoServicio: IDocumentoServicio, etiquetaServicio: IEtiquetaServicio, hojaRutaServicio: IHojaRutaServicio, notaServicio: INotaServicio, participanteServicio: IParticipanteServicio, personaServicio: IPersonaServicio, plantillaServicio: IPlantillaServicio, puestoServicio: IPuestoServicio, seguimientoServicio: ISeguimientoServicio, tipoDocumentoServicio: ITipoDocumentoServicio, uniOrganizacionalServicio: IUniOrganizacionalServicio, grupoServicio: IGrupoServicio, rolServicio: IRolServicio, cuentaServicio: ICuentaServicio, rolCuentaServicio: IRolCuentaServicio, usuarioServicio: IUsuarioServicio, pruebaServicio: IPruebaServicio);
}
export declare const SERVICIO_FACTORY_PROVIDER: {
    provide: string;
    useClass: typeof ServicioFactory;
};

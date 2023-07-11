import { ICuentaServicio, IGrupoServicio, ILdapServicio, IRolCuentaServicio, IRolServicio, IUsuarioServicio } from '../../dominio/contratos/aplicacion/servicios';
export declare class ServicioFactory {
    cuentaServicio: ICuentaServicio;
    grupoServicio: IGrupoServicio;
    ldapServicio: ILdapServicio;
    rolCuentaServicio: IRolCuentaServicio;
    rolServicio: IRolServicio;
    usuarioServicio: IUsuarioServicio;
    constructor(cuentaServicio: ICuentaServicio, grupoServicio: IGrupoServicio, ldapServicio: ILdapServicio, rolCuentaServicio: IRolCuentaServicio, rolServicio: IRolServicio, usuarioServicio: IUsuarioServicio);
}
export declare const SERVICIO_FACTORY_PROVIDER: {
    provide: string;
    useClass: typeof ServicioFactory;
};

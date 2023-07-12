import {
  ICuentaServicio,
  IGrupoServicio,
  ILdapServicio,
  IRolCuentaServicio,
  IRolServicio,
  IUsuarioServicio,
} from './servicios';

export const SERVICIO_FACTORY = 'SERVICIO_FACTORY';

export interface IServicioFactory {
  cuentaServicio: ICuentaServicio;
  grupoServicio: IGrupoServicio;
  ldapServicio: ILdapServicio;
  rolCuentaServicio: IRolCuentaServicio;
  rolServicio: IRolServicio;
  usuarioServicio: IUsuarioServicio;
}

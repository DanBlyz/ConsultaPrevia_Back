import { AutenticacionDto, CuentaLdapDto } from '../../../transferencia';

export const LDAP_SERVICIO = 'LDAP_SERVICIO';

export interface ILdapServicio {
  obtenerPorUid(uid: string): Promise<CuentaLdapDto>;
  obtenerToken(objeto: AutenticacionDto): Promise<any>;
}

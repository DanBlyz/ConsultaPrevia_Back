import { Inject, Injectable } from '@nestjs/common';

import { SERVICIO_FACTORY } from '../../dominio/contratos/aplicacion';
import {
  ICuentaServicio,
  IGrupoServicio,
  ILdapServicio,
  IRolCuentaServicio,
  IRolServicio,
  IUsuarioServicio,
} from '../../dominio/contratos/aplicacion/servicios';
import {
  CUENTA_SERVICIO,
  GRUPO_SERVICIO,
  LDAP_SERVICIO,
  ROL_CUENTA_SERVICIO,
  ROL_SERVICIO,
  USUARIO_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';

@Injectable()
export class ServicioFactory {
  constructor(
    @Inject(CUENTA_SERVICIO) public cuentaServicio: ICuentaServicio,
    @Inject(GRUPO_SERVICIO) public grupoServicio: IGrupoServicio,
    @Inject(LDAP_SERVICIO) public ldapServicio: ILdapServicio,
    @Inject(ROL_CUENTA_SERVICIO) public rolCuentaServicio: IRolCuentaServicio,
    @Inject(ROL_SERVICIO) public rolServicio: IRolServicio,
    @Inject(USUARIO_SERVICIO) public usuarioServicio: IUsuarioServicio,
  ) {}
}

export const SERVICIO_FACTORY_PROVIDER = {
  provide: SERVICIO_FACTORY,
  useClass: ServicioFactory,
};

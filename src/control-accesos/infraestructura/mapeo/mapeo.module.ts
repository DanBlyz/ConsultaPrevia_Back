import { Module } from '@nestjs/common';

import {
  CuentaLdapProfile,
  CuentaProfile,
  GrupoProfile,
  RolCuentaProfile,
  RolProfile,
  UsuarioProfile,
} from './perfiles';
import {
  CuentaFiltroProfile,
  GrupoFiltroProfile,
  UsuarioFiltroProfile,
} from './perfiles/filtros';

@Module({
  providers: [
    CuentaLdapProfile,
    CuentaProfile,
    GrupoProfile,
    RolCuentaProfile,
    RolProfile,
    UsuarioProfile,
    CuentaFiltroProfile,
    GrupoFiltroProfile,
    UsuarioFiltroProfile,
  ],
})
export class MapeoModule {}

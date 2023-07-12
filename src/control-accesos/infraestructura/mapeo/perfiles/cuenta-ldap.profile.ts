import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { CuentaLdap } from '../../../dominio/entidades';
import {
  CuentaLdapCreacionDto,
  CuentaLdapDto,
  CuentaLdapModificacionDto,
} from '../../../dominio/transferencia';

@Injectable()
export class CuentaLdapProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, CuentaLdap, CuentaLdapDto);
      createMap(mapper, CuentaLdapCreacionDto, CuentaLdap);
      createMap(mapper, CuentaLdapModificacionDto, CuentaLdap);
    };
  }
}

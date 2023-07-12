import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { ActoAdministrativo } from '../../../dominio/entidades';
import {
  ActoAdministrativoCreacionDto,
  ActoAdministrativoDto,
  ActoAdministrativoModificacionDto,
} from '../../../dominio/transferencia';
import { ActoAdministrativoEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class ActoAdministrativoProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ActoAdministrativo, ActoAdministrativoDto);
      createMap(mapper, ActoAdministrativoCreacionDto, ActoAdministrativo);
      createMap(mapper, ActoAdministrativoModificacionDto, ActoAdministrativo);

      createMap(mapper, ActoAdministrativo, ActoAdministrativoEntity);
      createMap(
        mapper,
        ActoAdministrativoEntity,
        ActoAdministrativo,
      );
    };
  }
}

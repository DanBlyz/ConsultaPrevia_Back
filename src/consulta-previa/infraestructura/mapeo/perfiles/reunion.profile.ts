import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Reunion } from '../../../dominio/entidades';
import {
  ReunionCreacionDto,
  ReunionDto,
  ReunionModificacionDto,
} from '../../../dominio/transferencia';
import { ReunionEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class ReunionProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Reunion, ReunionDto);
      createMap(mapper, ReunionCreacionDto, Reunion);
      createMap(mapper, ReunionModificacionDto, Reunion);

      createMap(mapper, Reunion, ReunionEntity);
      createMap(
        mapper,
        ReunionEntity,
        Reunion,
      );
    };
  }
}

import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { PagoCpt } from '../../../dominio/entidades';
import {
  PagoCptCreacionDto,
  PagoCptDto,
  PagoCptModificacionDto,
} from '../../../dominio/transferencia';
import { PagoCptEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class PagoCptProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, PagoCpt, PagoCptDto);
      createMap(mapper, PagoCptCreacionDto, PagoCpt);
      createMap(mapper, PagoCptModificacionDto, PagoCpt);

      createMap(mapper, PagoCpt, PagoCptEntity);
      createMap(
        mapper,
        PagoCptEntity,
        PagoCpt,
      );
    };
  }
}

import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Tramite } from '../../../dominio/entidades';
import {
  TramiteCreacionDto,
  TramiteDto,
  TramiteModificacionDto,
} from '../../../dominio/transferencia';
import { TramiteEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class TramiteProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Tramite, TramiteDto);
      createMap(mapper, TramiteCreacionDto, Tramite);
      createMap(mapper, TramiteModificacionDto, Tramite);

      createMap(mapper, Tramite, TramiteEntity);
      createMap(
        mapper,
        TramiteEntity,
        Tramite,
      );
    };
  }
}

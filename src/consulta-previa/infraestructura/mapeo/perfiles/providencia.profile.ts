import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Providencia } from '../../../dominio/entidades';
import {
  ProvidenciaCreacionDto,
  ProvidenciaDto,
  ProvidenciaModificacionDto,
} from '../../../dominio/transferencia';
import { ProvidenciaEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class ProvidenciaProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Providencia, ProvidenciaDto);
      createMap(mapper, ProvidenciaCreacionDto, Providencia);
      createMap(mapper, ProvidenciaModificacionDto, Providencia);

      createMap(mapper, Providencia, ProvidenciaEntity);
      createMap(
        mapper,
        ProvidenciaEntity,
        Providencia,
      );
    };
  }
}

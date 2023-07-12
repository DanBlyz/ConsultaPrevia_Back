import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Informe } from '../../../dominio/entidades';
import {
  InformeCreacionDto,
  InformeDto,
  InformeModificacionDto,
} from '../../../dominio/transferencia';
import { InformeEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class InformeProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Informe, InformeDto);
      createMap(mapper, InformeCreacionDto, Informe);
      createMap(mapper, InformeModificacionDto, Informe);

      createMap(mapper, Informe, InformeEntity);
      createMap(
        mapper,
        InformeEntity,
        Informe,
      );
    };
  }
}

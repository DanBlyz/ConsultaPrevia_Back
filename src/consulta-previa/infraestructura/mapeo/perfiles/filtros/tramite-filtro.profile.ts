import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { TramiteFiltro } from '../../../../dominio/entidades/filtros';
import { TramiteFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class TramiteFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, TramiteFiltroDto, TramiteFiltro);
    };
  }
}
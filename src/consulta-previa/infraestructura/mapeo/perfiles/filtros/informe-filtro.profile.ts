import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { InformeFiltro } from '../../../../dominio/entidades/filtros';
import { InformeFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class InformeFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, InformeFiltroDto, InformeFiltro);
    };
  }
}

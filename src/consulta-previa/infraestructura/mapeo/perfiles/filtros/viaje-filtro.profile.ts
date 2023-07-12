import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { ViajeFiltro } from '../../../../dominio/entidades/filtros';
import { ViajeFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class ViajeFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ViajeFiltroDto, ViajeFiltro);
    };
  }
}

import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { ReunionFiltro } from '../../../../dominio/entidades/filtros';
import { ReunionFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class ReunionFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ReunionFiltroDto, ReunionFiltro);
    };
  }
}

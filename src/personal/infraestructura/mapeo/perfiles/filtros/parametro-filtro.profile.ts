import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { ParametroFiltro } from '../../../../dominio/entidades/filtros';
import { ParametroFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class ParametroFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ParametroFiltroDto, ParametroFiltro);
    };
  }
}

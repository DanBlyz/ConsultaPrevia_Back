import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { GrupoFiltro } from '../../../../dominio/entidades/filtros';
import { GrupoFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class GrupoFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, GrupoFiltroDto, GrupoFiltro);
    };
  }
}

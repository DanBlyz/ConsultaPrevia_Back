import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { ResolucionFiltro } from '../../../../dominio/entidades/filtros';
import { ResolucionFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class ResolucionFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ResolucionFiltroDto, ResolucionFiltro);
    };
  }
}

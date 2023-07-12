import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { PuestoPersonaFiltro } from '../../../../dominio/entidades/filtros';
import { PuestoPersonaFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class PuestoPersonaFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, PuestoPersonaFiltroDto, PuestoPersonaFiltro);
    };
  }
}

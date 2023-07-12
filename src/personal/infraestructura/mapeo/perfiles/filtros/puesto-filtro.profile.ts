import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { PuestoFiltro } from '../../../../dominio/entidades/filtros';
import { PuestoFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class PuestoFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, PuestoFiltroDto, PuestoFiltro);
    };
  }
}

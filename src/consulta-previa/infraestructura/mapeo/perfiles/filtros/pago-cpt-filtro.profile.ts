import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { PagoCptFiltro } from '../../../../dominio/entidades/filtros';
import { PagoCptFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class PagoCptFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, PagoCptFiltroDto, PagoCptFiltro);
    };
  }
}

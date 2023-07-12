import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { ActoAdministrativoFiltro } from '../../../../dominio/entidades/filtros';
import { ActoAdministrativoFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class ActoAdministrativoFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ActoAdministrativoFiltroDto, ActoAdministrativoFiltro);
    };
  }
}

import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { UniOrganizacionalFiltro } from '../../../../dominio/entidades/filtros';
import { UniOrganizacionalFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class UniOrganizacionalFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, UniOrganizacionalFiltroDto, UniOrganizacionalFiltro);
    };
  }
}

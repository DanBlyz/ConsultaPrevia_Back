import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { PersonaFiltro } from '../../../../dominio/entidades/filtros';
import { PersonaFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class PersonaFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, PersonaFiltroDto, PersonaFiltro);
    };
  }
}

import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { SujetoIdentificadoFiltro } from '../../../../dominio/entidades/filtros';
import { SujetoIdentificadoFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class SujetoIdentificadoFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, SujetoIdentificadoFiltroDto, SujetoIdentificadoFiltro);
    };
  }
}

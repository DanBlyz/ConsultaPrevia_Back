import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { ProvidenciaFiltro } from '../../../../dominio/entidades/filtros';
import { ProvidenciaFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class ProvidenciaFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, ProvidenciaFiltroDto, ProvidenciaFiltro);
    };
  }
}

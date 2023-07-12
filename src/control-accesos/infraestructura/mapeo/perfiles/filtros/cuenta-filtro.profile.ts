import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { CuentaFiltro } from '../../../../dominio/entidades/filtros';
import { CuentaFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class CuentaFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, CuentaFiltroDto, CuentaFiltro);
    };
  }
}

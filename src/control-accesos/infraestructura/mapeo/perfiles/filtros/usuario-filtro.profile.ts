import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { UsuarioFiltro } from '../../../../dominio/entidades/filtros';
import { UsuarioFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class UsuarioFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, UsuarioFiltroDto, UsuarioFiltro);
    };
  }
}

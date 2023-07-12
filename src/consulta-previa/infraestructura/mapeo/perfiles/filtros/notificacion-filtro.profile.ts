import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { NotificacionFiltro } from '../../../../dominio/entidades/filtros';
import { NotificacionFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class NotificacionFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, NotificacionFiltroDto, NotificacionFiltro);
    };
  }
}

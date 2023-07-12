import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Notificacion } from '../../../dominio/entidades';
import {
  NotificacionCreacionDto,
  NotificacionDto,
  NotificacionModificacionDto,
} from '../../../dominio/transferencia';
import { NotificacionEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class NotificacionProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Notificacion, NotificacionDto);
      createMap(mapper, NotificacionCreacionDto, Notificacion);
      createMap(mapper, NotificacionModificacionDto, Notificacion);

      createMap(mapper, Notificacion, NotificacionEntity);
      createMap(
        mapper,
        NotificacionEntity,
        Notificacion,
      );
    };
  }
}

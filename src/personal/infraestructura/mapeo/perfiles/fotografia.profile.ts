import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Fotografia } from '../../../dominio/entidades';
import {
  FotografiaCreacionDto,
  FotografiaDto,
  FotografiaModificacionDto,
} from '../../../dominio/transferencia';
import { FotografiaEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class FotografiaProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Fotografia, FotografiaDto);
      createMap(mapper, FotografiaCreacionDto, Fotografia);
      createMap(mapper, FotografiaModificacionDto, Fotografia);

      createMap(mapper, Fotografia, FotografiaEntity);
      createMap(
        mapper,
        FotografiaEntity,
        Fotografia,
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember((destino) => destino.sePuedeEliminar, fromValue(true)),
      );
    };
  }
}

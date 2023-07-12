import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Parametro } from '../../../dominio/entidades';
import {
  ParametroCreacionDto,
  ParametroDto,
  ParametroModificacionDto,
} from '../../../dominio/transferencia';
import { ParametroEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class ParametroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Parametro, ParametroDto);
      createMap(mapper, ParametroCreacionDto, Parametro);
      createMap(mapper, ParametroModificacionDto, Parametro);

      createMap(mapper, Parametro, ParametroEntity);
      createMap(
        mapper,
        ParametroEntity,
        Parametro,
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember((destino) => destino.sePuedeEliminar, fromValue(true)),
      );
    };
  }
}

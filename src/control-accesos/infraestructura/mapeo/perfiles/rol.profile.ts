import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  fromValue,
  mapFrom,
  Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Rol } from '../../../dominio/entidades';
import {
  RolCreacionDto,
  RolDto,
  RolModificacionDto,
} from '../../../dominio/transferencia';
import { RolEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class RolProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Rol, RolDto);
      createMap(mapper, RolCreacionDto, Rol);
      createMap(mapper, RolModificacionDto, Rol);

      createMap(mapper, Rol, RolEntity);
      createMap(
        mapper,
        RolEntity,
        Rol,
        forMember(
          (destino) => destino.grupoCodigo,
          mapFrom((origen) => origen.grupo?.codigo),
        ),
        forMember(
          (destino) => destino.grupoNombre,
          mapFrom((origen) => origen.grupo?.nombre),
        ),
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember((destino) => destino.sePuedeEliminar, fromValue(true)),
      );
    };
  }
}

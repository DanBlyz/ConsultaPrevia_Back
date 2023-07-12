import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Usuario } from '../../../dominio/entidades';
import {
  UsuarioCreacionDto,
  UsuarioDto,
  UsuarioModificacionDto,
} from '../../../dominio/transferencia';
import { UsuarioEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class UsuarioProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Usuario, UsuarioDto);
      createMap(mapper, UsuarioCreacionDto, Usuario);
      createMap(mapper, UsuarioModificacionDto, Usuario);

      createMap(mapper, Usuario, UsuarioEntity);
      createMap(
        mapper,
        UsuarioEntity,
        Usuario,
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember((destino) => destino.sePuedeEliminar, fromValue(true)),
      );
    };
  }
}

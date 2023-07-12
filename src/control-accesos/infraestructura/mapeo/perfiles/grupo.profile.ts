import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  fromValue,
  mapFrom,
  Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Grupo } from '../../../dominio/entidades';
import {
  GrupoCreacionDto,
  GrupoDto,
  GrupoModificacionDto,
} from '../../../dominio/transferencia';
import { GrupoEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class GrupoProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Grupo, GrupoDto);
      createMap(mapper, GrupoCreacionDto, Grupo);
      createMap(mapper, GrupoModificacionDto, Grupo);

      createMap(mapper, Grupo, GrupoEntity);
      createMap(
        mapper,
        GrupoEntity,
        Grupo,
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember(
          (destino) => destino.sePuedeEliminar,
          mapFrom((origen) =>
            origen.listaRol && origen.listaRol.length > 0 ? false : true,
          ),
        ),
      );
    };
  }
}

import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  fromValue,
  mapFrom,
  Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Persona } from '../../../dominio/entidades';
import {
  PersonaCreacionDto,
  PersonaDto,
  PersonaModificacionDto,
} from '../../../dominio/transferencia';
import { PersonaEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class PersonaProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Persona, PersonaDto);
      createMap(mapper, PersonaCreacionDto, Persona);
      createMap(mapper, PersonaModificacionDto, Persona);

      createMap(mapper, Persona, PersonaEntity);
      createMap(
        mapper,
        PersonaEntity,
        Persona,
        forMember(
          (destino) => destino.tieneFotografia,
          mapFrom((origen) => (origen.fotografia ? true : false)),
        ),
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember(
          (destino) => destino.sePuedeEliminar,
          mapFrom((origen) =>
            origen.listaPuestoPersona.length > 0 ? false : true,
          ),
        ),
      );
    };
  }
}

import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { PuestoPersona } from '../../../dominio/entidades';
import {
  PuestoPersonaCreacionDto,
  PuestoPersonaDto,
  PuestoPersonaModificacionDto,
} from '../../../dominio/transferencia';
import { PuestoPersonaEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class PuestoPersonaProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, PuestoPersona, PuestoPersonaDto);
      createMap(mapper, PuestoPersonaCreacionDto, PuestoPersona);
      createMap(mapper, PuestoPersonaModificacionDto, PuestoPersona);

      createMap(mapper, PuestoPersona, PuestoPersonaEntity);
      createMap(
        mapper,
        PuestoPersonaEntity,
        PuestoPersona,
        forMember(
          (destino) => destino.uniOrganizacionalNombre,
          mapFrom((origen) => origen.uniOrganizacional?.nombre),
        ),
        forMember(
          (destino) => destino.puestoNombre,
          mapFrom((origen) =>
            origen.puestoId ? origen.puesto?.nombre : origen.tipoLaboral,
          ),
        ),
        forMember(
          (destino) => destino.sePuedeModificar,
          mapFrom((origen) => (origen.estado === 'ACTUAL' ? true : false)),
        ),
        forMember(
          (destino) => destino.sePuedeEliminar,
          mapFrom((origen) => (origen.estado === 'ACTUAL' ? true : false)),
        ),
      );
    };
  }
}

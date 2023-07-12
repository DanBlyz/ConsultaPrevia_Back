import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  fromValue,
  mapFrom,
  Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Puesto } from '../../../dominio/entidades';
import {
  PuestoCreacionDto,
  PuestoDto,
  PuestoModificacionDto,
} from '../../../dominio/transferencia';
import { PuestoEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class PuestoProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Puesto, PuestoDto);
      createMap(mapper, PuestoCreacionDto, Puesto);
      createMap(mapper, PuestoModificacionDto, Puesto);

      createMap(mapper, Puesto, PuestoEntity);
      createMap(
        mapper,
        PuestoEntity,
        Puesto,
        forMember(
          (destino) => destino.uniOrganizacionalNombre,
          mapFrom((origen) => origen.uniOrganizacional?.nombre),
        ),
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember(
          (destino) => destino.sePuedeEliminar,
          mapFrom((origen) =>
            origen.estaActivo || origen.listaPuestoPersona?.length > 0
              ? false
              : true,
          ),
        ),
      );
    };
  }
}

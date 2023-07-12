import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  fromValue,
  mapFrom,
  Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { InfoLaboral } from '../../../dominio/entidades';
import {
  InfoLaboralCreacionDto,
  InfoLaboralDto,
  InfoLaboralModificacionDto,
} from '../../../dominio/transferencia';
import { InfoLaboralEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class InfoLaboralProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, InfoLaboral, InfoLaboralDto);
      createMap(mapper, InfoLaboralCreacionDto, InfoLaboral);
      createMap(mapper, InfoLaboralModificacionDto, InfoLaboral);

      createMap(mapper, InfoLaboral, InfoLaboralEntity);
      createMap(
        mapper,
        InfoLaboralEntity,
        InfoLaboral,
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
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember((destino) => destino.sePuedeEliminar, fromValue(true)),
      );
    };
  }
}

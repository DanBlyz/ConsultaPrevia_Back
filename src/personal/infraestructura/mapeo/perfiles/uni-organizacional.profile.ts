import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  fromValue,
  mapFrom,
  Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { UniOrganizacional } from '../../../dominio/entidades';
import {
  UniOrganizacionalCreacionDto,
  UniOrganizacionalDto,
  UniOrganizacionalModificacionDto,
} from '../../../dominio/transferencia';
import { UniOrganizacionalEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class UniOrganizacionalProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, UniOrganizacional, UniOrganizacionalDto);
      createMap(mapper, UniOrganizacionalCreacionDto, UniOrganizacional);
      createMap(mapper, UniOrganizacionalModificacionDto, UniOrganizacional);

      createMap(mapper, UniOrganizacional, UniOrganizacionalEntity);
      createMap(
        mapper,
        UniOrganizacionalEntity,
        UniOrganizacional,
        forMember(
          (destino) => destino.numPuestos,
          mapFrom((origen) => origen.listaPuesto?.length),
        ),
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember(
          (destino) => destino.sePuedeEliminar,
          mapFrom((origen) =>
            origen.estaActiva || origen.listaPuesto?.length > 0 ? false : true,
          ),
        ),
      );
    };
  }
}

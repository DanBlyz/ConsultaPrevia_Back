import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  fromValue,
  mapFrom,
  Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { RolCuenta } from '../../../dominio/entidades';
import {
  RolCuentaCreacionDto,
  RolCuentaDto,
  RolCuentaModificacionDto,
} from '../../../dominio/transferencia';
import { RolCuentaEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class RolCuentaProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, RolCuenta, RolCuentaDto);
      createMap(mapper, RolCuentaCreacionDto, RolCuenta);
      createMap(mapper, RolCuentaModificacionDto, RolCuenta);

      createMap(mapper, RolCuenta, RolCuentaEntity);
      createMap(
        mapper,
        RolCuentaEntity,
        RolCuenta,
        forMember(
          (destino) => destino.rolNombre,
          mapFrom((origen) => origen.rol.nombre),
        ),
        forMember(
          (destino) => destino.rolGrupoCodigo,
          mapFrom((origen) => origen.rol.grupo.codigo),
        ),
        forMember(
          (destino) => destino.rolGrupoNombre,
          mapFrom((origen) => origen.rol.grupo.nombre),
        ),
        forMember((destino) => destino.sePuedeModificar, fromValue(true)),
        forMember((destino) => destino.sePuedeEliminar, fromValue(true)),
      );
    };
  }
}

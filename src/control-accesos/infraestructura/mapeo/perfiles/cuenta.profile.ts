import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import {
  createMap,
  forMember,
  fromValue,
  mapFrom,
  Mapper,
} from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Cuenta } from '../../../dominio/entidades';
import {
  CuentaCreacionDto,
  CuentaDto,
  CuentaModificacionDto,
} from '../../../dominio/transferencia';
import { CuentaEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class CuentaProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Cuenta, CuentaDto);
      createMap(mapper, CuentaCreacionDto, Cuenta);
      createMap(mapper, CuentaModificacionDto, Cuenta);

      createMap(mapper, Cuenta, CuentaEntity);
      createMap(
        mapper,
        CuentaEntity,
        Cuenta,
        forMember((destino) => destino.sePuedeModificar, fromValue(false)),
        forMember(
          (destino) => destino.sePuedeEliminar,
          mapFrom((origen) =>
            origen.listaRolCuenta && origen.listaRolCuenta.length > 0
              ? false
              : true,
          ),
        ),
      );
    };
  }
}

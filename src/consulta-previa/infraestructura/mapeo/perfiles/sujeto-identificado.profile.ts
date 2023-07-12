import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { SujetoIdentificado } from '../../../dominio/entidades';
import {
  SujetoIdentificadoCreacionDto,
  SujetoIdentificadoDto,
  SujetoIdentificadoModificacionDto,
} from '../../../dominio/transferencia';
import { SujetoIdentificadoEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class SujetoIdentificadoProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, SujetoIdentificado, SujetoIdentificadoDto);
      createMap(mapper, SujetoIdentificadoCreacionDto, SujetoIdentificado);
      createMap(mapper, SujetoIdentificadoModificacionDto, SujetoIdentificado);

      createMap(mapper, SujetoIdentificado, SujetoIdentificadoEntity);
      createMap(
        mapper,
        SujetoIdentificadoEntity,
        SujetoIdentificado,
      );
    };
  }
}

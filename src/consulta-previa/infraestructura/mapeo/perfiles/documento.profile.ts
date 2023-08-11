import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, fromValue, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { Documento } from '../../../dominio/entidades';
import {
  DocumentoCreacionDto,
  DocumentoDto,
  DocumentoModificacionDto,
} from '../../../dominio/transferencia';
import { DocumentoEntity } from '../../repositorio/persistencia/orm';

@Injectable()
export class DocumentoProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, Documento, DocumentoDto);
      createMap(mapper, DocumentoCreacionDto, Documento);
      createMap(mapper, DocumentoModificacionDto, Documento);

      createMap(mapper, Documento, DocumentoEntity);
      createMap(
        mapper,
        DocumentoEntity,
        Documento,
      );
    };
  }
}

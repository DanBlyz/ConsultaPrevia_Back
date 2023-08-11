import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';

import { DocumentoFiltro } from '../../../../dominio/entidades/filtros';
import { DocumentoFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class DocumentoFiltroProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(mapper, DocumentoFiltroDto, DocumentoFiltro);
    };
  }
}

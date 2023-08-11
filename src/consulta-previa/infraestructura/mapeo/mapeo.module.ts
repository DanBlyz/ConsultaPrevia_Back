import { Module } from '@nestjs/common';

import {
  TramiteProfile,
  InformeProfile,
  SujetoIdentificadoProfile,
  NotificacionProfile,
  ReunionProfile,
  ResolucionProfile,
  ActoAdministrativoProfile,
  PagoCptProfile,
  ViajeProfile,
  ProvidenciaProfile,
  DocumentoProfile
} from './perfiles';
import {
  TramiteFiltroProfile,
  InformeFiltroProfile,
  SujetoIdentificadoFiltroProfile,
  NotificacionFiltroProfile,
  ReunionFiltroProfile,
  ResolucionFiltroProfile,
  ActoAdministrativoFiltroProfile,
  PagoCptFiltroProfile,
  ViajeFiltroProfile,
  ProvidenciaFiltroProfile,
  DocumentoFiltroProfile
} from './perfiles/filtros';

@Module({
  providers: [
    TramiteProfile,
    InformeProfile,
    SujetoIdentificadoProfile,
    NotificacionProfile,
    ReunionProfile,
    ResolucionProfile,
    ActoAdministrativoProfile,
    PagoCptProfile,
    ViajeProfile,
    ProvidenciaProfile,
    DocumentoProfile,

    TramiteFiltroProfile,
    InformeFiltroProfile,
    SujetoIdentificadoFiltroProfile,
    NotificacionFiltroProfile,
    ReunionFiltroProfile,
    ResolucionFiltroProfile,
    ActoAdministrativoFiltroProfile,
    PagoCptFiltroProfile,
    ViajeFiltroProfile,
    ProvidenciaFiltroProfile,
    DocumentoFiltroProfile
  ],
})
export class MapeoModule {}

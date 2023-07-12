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
  ],
})
export class MapeoModule {}

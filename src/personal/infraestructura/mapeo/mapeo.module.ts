import { Module } from '@nestjs/common';

import {
  FotografiaProfile,
  InfoLaboralProfile,
  ParametroProfile,
  PersonaProfile,
  PuestoPersonaProfile,
  PuestoProfile,
  UniOrganizacionalProfile,
} from './perfiles';
import {
  ParametroFiltroProfile,
  PersonaFiltroProfile,
  PuestoFiltroProfile,
  PuestoPersonaFiltroProfile,
  UniOrganizacionalFiltroProfile,
} from './perfiles/filtros';

@Module({
  providers: [
    FotografiaProfile,
    InfoLaboralProfile,
    ParametroProfile,
    PersonaProfile,
    PuestoPersonaProfile,
    PuestoProfile,
    UniOrganizacionalProfile,
    ParametroFiltroProfile,
    PersonaFiltroProfile,
    PuestoFiltroProfile,
    PuestoPersonaFiltroProfile,
    UniOrganizacionalFiltroProfile,
  ],
})
export class MapeoModule {}

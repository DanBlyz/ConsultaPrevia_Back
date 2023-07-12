import { Inject, Injectable } from '@nestjs/common';

import {
  IServicioFactory,
  SERVICIO_FACTORY,
} from '../../dominio/contratos/aplicacion';
import {
  IFotografiaServicio,
  IInfoLaboralServicio,
  INFO_LABORAL_SERVICIO,
  IParametroServicio,
  IPersonaServicio,
  IPuestoPersonaServicio,
  IPuestoServicio,
  IUniOrganizacionalServicio,
} from '../../dominio/contratos/aplicacion/servicios';
import {
  FOTOGRAFIA_SERVICIO,
  PARAMETRO_SERVICIO,
  PERSONA_SERVICIO,
  PUESTO_PERSONA_SERVICIO,
  PUESTO_SERVICIO,
  UNI_ORGANIZACIONAL_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';

@Injectable()
export class ServicioFactory implements IServicioFactory {
  constructor(
    @Inject(FOTOGRAFIA_SERVICIO)
    public fotografiaServicio: IFotografiaServicio,
    @Inject(INFO_LABORAL_SERVICIO)
    public infoLaboralServicio: IInfoLaboralServicio,
    @Inject(PARAMETRO_SERVICIO) public parametroServicio: IParametroServicio,
    @Inject(PERSONA_SERVICIO) public personaServicio: IPersonaServicio,
    @Inject(PUESTO_SERVICIO) public puestoServicio: IPuestoServicio,
    @Inject(PUESTO_PERSONA_SERVICIO)
    public puestoPersonaServicio: IPuestoPersonaServicio,
    @Inject(UNI_ORGANIZACIONAL_SERVICIO)
    public uniOrganizacionalServicio: IUniOrganizacionalServicio,
  ) {}
}

export const SERVICIO_FACTORY_PROVIDER = {
  provide: SERVICIO_FACTORY,
  useClass: ServicioFactory,
};

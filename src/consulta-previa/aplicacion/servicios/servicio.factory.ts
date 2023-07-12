import { Inject, Injectable } from '@nestjs/common';

import {
  IServicioFactory,
  SERVICIO_FACTORY,
} from '../../dominio/contratos/aplicacion';
import {
  ITramiteServicio,
  IInformeServicio,
  ISujetoIdentificadoServicio,
  INotificacionServicio,
  IReunionServicio,
  IResolucionServicio,
  IActoAdministrativoServicio,
  IPagoCptServicio,
  IViajeServicio,
  IProvidenciaServicio,
} from '../../dominio/contratos/aplicacion/servicios';
import {
  TRAMITE_SERVICIO,
  INFORME_SERVICIO,
  SUJETO_IDENTIFICADO_SERVICIO,
  NOTIFICACION_SERVICIO,
  REUNION_SERVICIO,
  RESOLUCION_SERVICIO,
  ACTOS_ADMINISTRATIVOS_SERVICIO,
  PAGO_CPT_SERVICIO,
  VIAJE_SERVICIO,
  PROVIDENCIA_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';

@Injectable()
export class ServicioFactory implements IServicioFactory {
  constructor(
    @Inject(TRAMITE_SERVICIO) public tramiteServicio: ITramiteServicio,
    @Inject(INFORME_SERVICIO) public informeServicio: IInformeServicio,
    @Inject(SUJETO_IDENTIFICADO_SERVICIO) public sujetoIdentificadoServicio: ISujetoIdentificadoServicio,
    @Inject(NOTIFICACION_SERVICIO) public notificacionServicio: INotificacionServicio,
    @Inject(REUNION_SERVICIO) public reunionServicio: IReunionServicio,
    @Inject(RESOLUCION_SERVICIO) public resolucionServicio: IResolucionServicio,
    @Inject(ACTOS_ADMINISTRATIVOS_SERVICIO) public ActoAdministrativoServicio: IActoAdministrativoServicio,
    @Inject(PAGO_CPT_SERVICIO) public pagoCptServicio: IPagoCptServicio,
    @Inject(VIAJE_SERVICIO) public viajeServicio: IViajeServicio,
    @Inject(PROVIDENCIA_SERVICIO) public providenciaServicio: IProvidenciaServicio,

  ) {}
}

export const SERVICIO_FACTORY_PROVIDER = {
  provide: SERVICIO_FACTORY,
  useClass: ServicioFactory,
};

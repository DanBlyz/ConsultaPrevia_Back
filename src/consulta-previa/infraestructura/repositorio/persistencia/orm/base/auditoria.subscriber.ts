import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';

import { Identidad } from '../../../../../../comun/sesion';

import { AuditoriaEntity } from './auditoria.entity';

@EventSubscriber()
export class AuditoriaSubscriber
  implements EntitySubscriberInterface<AuditoriaEntity>
{
  private readonly identidad = Identidad.getInstance();

  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  /*listenTo() {
    return AuditoriaEntity;
  }*/

  beforeInsert(event: InsertEvent<AuditoriaEntity>): void {
    const { entity } = event;
    entity._usuCreador = this.identidad.cuenta;
    entity._instCreacion = new Date();
  }

  beforeUpdate(event: UpdateEvent<AuditoriaEntity>): void {
    const {
      entity,
      queryRunner: {
        data: { action },
      },
    } = event;
    if (action === 'soft-remove') {
      entity._usuEliminacion = this.identidad.cuenta;
      entity._instEliminacion = new Date();
    } else {
      entity._usuModificacion = this.identidad.cuenta;
      entity._instModificacion = new Date();
    }
    delete entity.id;
  }

  afterUpdate(event: UpdateEvent<AuditoriaEntity>): void {
    const { queryRunner } = event;
    queryRunner.data = {};
  }
}

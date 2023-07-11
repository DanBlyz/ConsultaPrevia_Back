import { Connection, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
import { AuditoriaEntity } from './auditoria.entity';
export declare class AuditoriaSubscriber implements EntitySubscriberInterface<AuditoriaEntity> {
    private readonly identidad;
    constructor(connection: Connection);
    beforeInsert(event: InsertEvent<AuditoriaEntity>): void;
    beforeUpdate(event: UpdateEvent<AuditoriaEntity>): void;
    afterUpdate(event: UpdateEvent<AuditoriaEntity>): void;
}

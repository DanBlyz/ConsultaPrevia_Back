import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToMany,
    ManyToOne,
    OneToOne,
  } from 'typeorm';
  import { AutoMap } from '@automapper/classes';
  
  import { AuditoriaEntity } from './base/auditoria.entity';
import { TramiteEntity } from './tramite.entity';
import { ReunionEntity } from './reunion.entity';
 
  
  @Entity('notificacion', { schema: 'consulta-previa' })
  export class NotificacionEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'idnotificacion' })
    id: number;

    @AutoMap()
    @Column({ name: 'fk_idtramite' })
    fk_idTramite: number;
  
    @AutoMap()
    @Column({ name: 'notificado' })
    notificado: string;
  
    @AutoMap()
    @Column({ name: 'direcciondpto' })
    direccionDpto : string;
  
    @AutoMap()
    @Column({ name: 'notificacionpdf' })
    notificacionPdf : string;

    @AutoMap()
    @Column({ name: 'flujo' })
    flujo : string;

    @AutoMap()
    @Column({ name: 'representanteminero' })
    representanteMinero : boolean;

    @AutoMap()
    @Column({ name: 'representantecomunidad' })
    representanteComunidad : boolean;

    @AutoMap()
    @Column({ name: 'sifde' })
    sifde : boolean;

    @AutoMap()
    @Column({ name: 'comunidad' })
    comunidad : string;

    @AutoMap()
    @Column({ name: 'nroreunion' })
    nroReunion : string;

    @AutoMap(() => [ReunionEntity])
    @OneToOne(() => ReunionEntity, (reunion) => reunion.notificacion)
    reunion: ReunionEntity;

    @ManyToOne(() => TramiteEntity, (tramite) => tramite.listaNotificacion)
    @JoinColumn({ name: 'fk_idtramite' })
    tramite: TramiteEntity;

  }
  
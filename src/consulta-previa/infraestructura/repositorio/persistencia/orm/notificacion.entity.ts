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
    @Column({ name: 'fk_idtramite',default:null })
    fk_idTramite: number;
  
    @AutoMap()
    @Column({ name: 'notificado' ,default:null})
    notificado: string;
  
    @AutoMap()
    @Column({ name: 'direcciondpto' ,default:null})
    direccionDpto : string;
  
    @AutoMap()
    @Column({ name: 'notificacionpdf' ,default:null})
    notificacionPdf : string;

    @AutoMap()
    @Column({ name: 'flujo',default:null })
    flujo : string;

    @AutoMap()
    @Column({ name: 'representanteminero',default:null })
    representanteMinero : boolean;

    @AutoMap()
    @Column({ name: 'representantecomunidad' ,default:null})
    representanteComunidad : boolean;

    @AutoMap()
    @Column({ name: 'sifde' ,default:null})
    sifde : boolean;

    @AutoMap()
    @Column({ name: 'comunidad',default:null })
    comunidad : string;

    @AutoMap()
    @Column({ name: 'nroreunion',default:null })
    nroReunion : string;

    @AutoMap(() => [ReunionEntity])
    @OneToOne(() => ReunionEntity, (reunion) => reunion.notificacion)
    reunion: ReunionEntity;

    @AutoMap(() => [TramiteEntity])
    @ManyToOne(() => TramiteEntity, (tramite) => tramite.listaNotificacion)
    @JoinColumn({ name: 'fk_idtramite' })
    tramite: TramiteEntity;

  }
  
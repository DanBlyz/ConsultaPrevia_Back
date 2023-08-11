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
 
  
  @Entity('providencia', { schema: 'consulta-previa' })
  export class ProvidenciaEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'idprovidencia' })
    id: number;

    @AutoMap()
    @Column({ name: 'fk_idtramite',default:null })
    fk_idTramite: number;
  
    @AutoMap()
    @Column({ name: 'correlativo',default:null })
    correlativo: string;
  
    @AutoMap()
    @Column({ name: 'referencia' ,default:null})
    referencia: string;
  
    @AutoMap()
    @Column({ name: 'providenciapdf' ,default:null})
    providenciaPdf: string;

    @AutoMap()
    @Column({ name: 'flujo',default:null })
    flujo: string;

    @AutoMap(() => [TramiteEntity])
    @ManyToOne(() => TramiteEntity, (tramite) => tramite.listaProvidencia)
    @JoinColumn({ name: 'fk_idtramite' })
    tramite: TramiteEntity;
  
  }
  
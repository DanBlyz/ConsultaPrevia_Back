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
import { SujetoIdentificadoEntity } from './sujeto-identificado.entity';
 
  
  @Entity('documento', { schema: 'consulta-previa' })
  export class DocumentoEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'iddocumento' })
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
    @Column({ name: 'documentopdf' ,default:null})
    documentoPdf: string;

    @AutoMap()
    @Column({ name: 'tipodocumento' ,default:null})
    tipoDocumento: string;

    @AutoMap()
    @Column({ name: 'flujo',default:null })
    flujo: string;

    @AutoMap()
    @Column({ name: 'estado',default:null })
    estado: string;

    @AutoMap(() => [TramiteEntity])
    @ManyToOne(() => TramiteEntity, (tramite) => tramite.listaDocumento)
    @JoinColumn({ name: 'fk_idtramite' })
    tramite: TramiteEntity;

    @AutoMap(() => [SujetoIdentificadoEntity])
    @OneToMany(() => SujetoIdentificadoEntity, (sujetoidentificado) => sujetoidentificado.documento)
    @JoinColumn({ name: 'iddocumento' })
    listaSujetoIdentificado: SujetoIdentificadoEntity[];
  
  }
  
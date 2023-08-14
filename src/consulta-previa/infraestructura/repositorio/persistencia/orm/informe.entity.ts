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
 
  
  @Entity('informe', { schema: 'consulta-previa' })
  export class InformeEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'idinforme' })
    id: number;

    @AutoMap()
    @Column({ name: 'fk_idtramite' ,default:null})
    fk_idTramite: number;
  
    @AutoMap()
    @Column({ name: 'correlativo',default:null })
    correlativo: string;
  
    @AutoMap()
    @Column({ name: 'referencia' ,default:null})
    referencia: string;
  
    @AutoMap()
    @Column({ name: 'informepdf' ,default:null})
    informePdf: string;
  
    @AutoMap()
    @Column({ name: 'tipodocumento' ,default:null})
    tipoDocumento: string;

    @AutoMap()
    @Column({ name: 'flujo' ,default:null})
    flujo: string;

    /*@AutoMap(() => [TramiteEntity])
    @ManyToOne(() => TramiteEntity, (tramite) => tramite.listaInforme)
    @JoinColumn({ name: 'fk_idtramite' })
    tramite: TramiteEntity;*/

    /*@AutoMap(() => [SujetoIdentificadoEntity])
    @OneToMany(() => SujetoIdentificadoEntity, (sujetoidentificado) => sujetoidentificado.informe)
    @JoinColumn({ name: 'idinforme' })
    listaSujetoIdentificado: SujetoIdentificadoEntity[];*/

  }
  
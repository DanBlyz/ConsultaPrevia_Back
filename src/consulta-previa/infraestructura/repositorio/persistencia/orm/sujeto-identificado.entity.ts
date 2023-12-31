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
import { InformeEntity } from './informe.entity';
import { DocumentoEntity } from './documento.entity';
 
  
  @Entity('sujetoidentificado', { schema: 'consulta-previa' })
  export class SujetoIdentificadoEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'idsujeto' })
    id: number;
  
    @AutoMap()
    @Column({ name: 'fk_iddocumento' ,default:null})
    fk_idDocumento: number;
  
    @AutoMap()
    @Column({ name: 'comunidad' ,default:null})
    comunidad: string;
  
    @AutoMap()
    @Column({ name: 'autoridad' ,default:null})
    autoridad: string;

    @AutoMap()
    @Column({ name: 'telefono' ,default:0})
    telefono: number;
    
    @AutoMap()
    @Column({ name: 'estado' ,default:0})
    estado: string;

    /*@AutoMap(() => [InformeEntity])
    @ManyToOne(() => InformeEntity, (informe) => informe.listaSujetoIdentificado)
    @JoinColumn({ name: 'fk_idinforme' })
    informe: InformeEntity;*/

    @AutoMap(() => [DocumentoEntity])
    @ManyToOne(() => DocumentoEntity, (documento) => documento.listaSujetoIdentificado)
    @JoinColumn({ name: 'fk_iddocumento' })
    documento: DocumentoEntity;
  
  /*
    @OneToOne(() => ContenidoEntity, (contenido) => contenido.documento)
    @JoinColumn({ name: 'DOC_ID' })
    contenido: ContenidoEntity;
  
    @AutoMap(() => [ParticipanteEntity])
    @OneToMany(() => ParticipanteEntity, (participante) => participante.documento)
    @JoinColumn({ name: 'DOC_ID' })
    listaParticipante: ParticipanteEntity[];
  
    @OneToMany(() => NotaEntity, (nota) => nota.documento)
    @JoinColumn({ name: 'DOC_ID' })
    listaNota: NotaEntity[];
  
    @OneToMany(() => EtiquetaEntity, (etiqueta) => etiqueta.documento)
    @JoinColumn({ name: 'DOC_ID' })
    listaEtiqueta: EtiquetaEntity[];
  
    @OneToMany(
      () => DocumentoSeguimientoEntity,
      (documentoSeguimiento) => documentoSeguimiento.documento,
    )
    @JoinColumn({ name: 'DOC_ID' })
    listaDocumentoSeguimiento: DocumentoSeguimientoEntity[];
  
    @OneToMany(
      () => DocumentoDetalleEntity,
      (documentoDetalle) => documentoDetalle.documento,
    )
    @JoinColumn({ name: 'DOC_ID' })
    listaDocumentoDetalle: DocumentoDetalleEntity[];
  
    @OneToMany(() => AdjuntoEntity, (adjunto) => adjunto.documento)
    @JoinColumn({ name: 'DOC_ID' })
    listaAdjunto: AdjuntoEntity[];
  
    @ManyToOne(() => HojaRutaEntity, (hojaRuta) => hojaRuta.listaDocumento)
    @JoinColumn({ name: 'HOJA_RUTA_ID' })
    hojaRuta: HojaRutaEntity;
  
    @ManyToOne(
      () => TipoDocumentoEntity,
      (tipoDocumento) => tipoDocumento.listaDocumento,
    )
    @JoinColumn({ name: 'TIPO_DOC_ID' })
    tipoDocumento: TipoDocumentoEntity;
  
    @ManyToOne(
      () => ClasificacionEntity,
      (clasificacion) => clasificacion.listaDocumento,
    )
    @JoinColumn({ name: 'CLASIF_ID' })
    clasificacion: ClasificacionEntity;
  
    @OneToMany(() => SeguimientoEntity, (seguimiento) => seguimiento.documento)
    @JoinColumn({ name: 'DOC_ID' })
    listaSeguimiento: SeguimientoEntity[];

    */
  }
  
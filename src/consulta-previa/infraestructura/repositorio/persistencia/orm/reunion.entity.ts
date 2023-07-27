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
import { NotificacionEntity } from './notificacion.entity';
 
  
  @Entity('reunion', { schema: 'consulta-previa' })
  export class ReunionEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'idreunion' })
    id: number;

    @AutoMap()
    @Column({ name: 'fk_idnotificacion' })
    fk_idNotificacion: number;
 
    @AutoMap()
    @Column({ name: 'nroreunion' })
    nroReunion: string;
  
    @AutoMap()
    @Column({ name: 'conacuerdo' ,default:false})
    conAcuerdo: boolean;
  
    @AutoMap()
    @Column({ name: 'sinacuerdo' ,default:false})
    sinAcuerdo: boolean;

    @AutoMap()
    @Column({ name: 'motivo' })
    motivo: string;
  
    @AutoMap()
    @Column({ name: 'reunionrealizada',default:false })
    reunionRealizada: boolean;
  
    @AutoMap()
    @Column({ name: 'actareunionpdf' })
    actaReunionPdf: string;

    @AutoMap()
    @Column({ name: 'estado' })
    estado: string;

    @AutoMap()
    @Column({ name: 'flujo' })
    flujo: string;

    @AutoMap(() => [NotificacionEntity])
    @OneToOne(() => NotificacionEntity, (notificacion) => notificacion.reunion)
    @JoinColumn({ name: 'fk_idnotificacion' })
    notificacion: NotificacionEntity;
  
  
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
  
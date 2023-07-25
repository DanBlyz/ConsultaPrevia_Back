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

    @ManyToOne(() => TramiteEntity, (tramite) => tramite.listaNotificacion)
    @JoinColumn({ name: 'fk_idtramite' })
    tramite: TramiteEntity;
   
   /* @OneToOne(() => ReunionEntity, (reunion) => reunion.notificacion)
    @JoinColumn({ name: 'idnotificacion' })
    reunion: ReunionEntity;*/

    @OneToOne(() => ReunionEntity, (reunion) => reunion.notificacion)
    reunion: ReunionEntity;
  
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
  
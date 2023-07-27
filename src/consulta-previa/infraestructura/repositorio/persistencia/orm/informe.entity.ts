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
    @Column({ name: 'fk_idtramite' })
    fk_idTramite: number;
  
    @AutoMap()
    @Column({ name: 'correlativo' })
    correlativo: string;
  
    @AutoMap()
    @Column({ name: 'referencia' })
    referencia: string;
  
    @AutoMap()
    @Column({ name: 'informepdf' })
    informePdf: string;
  
    @AutoMap()
    @Column({ name: 'asunto' })
    asunto: string;

    @AutoMap()
    @Column({ name: 'flujo' })
    flujo: string;
    
    @ManyToOne(() => TramiteEntity, (tramite) => tramite.listaInforme)
    @JoinColumn({ name: 'fk_idtramite' })
    tramite: TramiteEntity;

    @AutoMap(() => [SujetoIdentificadoEntity])
    @OneToMany(() => SujetoIdentificadoEntity, (sujetoidentificado) => sujetoidentificado.informe)
    @JoinColumn({ name: 'idtramite' })
    listaSujetoIdentificado: SujetoIdentificadoEntity[];

  
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
  
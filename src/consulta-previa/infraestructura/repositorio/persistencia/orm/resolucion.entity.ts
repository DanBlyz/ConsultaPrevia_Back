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
  import { ActoAdministrativoEntity } from './actos-administrativos.entity';
 
  
  @Entity('resolucion', { schema: 'consulta-previa' })
  export class ResolucionEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'idresolucion' })
    id: number;

    @AutoMap()
    @Column({ name: 'fk_idtramite' ,default:null})
    fk_idTramite: number;
  
    @AutoMap()
    @Column({ name: 'informe' ,default:null})
    informe: string;
  
    @AutoMap()
    @Column({ name: 'correlativo' ,default:null})
    correlativo: string;
  
    @AutoMap()
    @Column({ name: 'informeaprobado' ,default:false})
    informeAprobado: boolean;
  
    @AutoMap()
    @Column({ name: 'actosadministrativos',default:false })
    actoAdministrativo: boolean;
  
    @AutoMap()
    @Column({ name: 'resolucionpdf' ,default:null})
    resolucionPdf: string;

    @AutoMap()
    @Column({ name: 'flujo',default:null })
    flujo: string;

    @AutoMap()
    @Column({ name: 'referencia' ,default: null})
    referencia: string;

    @ManyToOne(() => TramiteEntity, (tramite) => tramite.listaResolucion)
    @JoinColumn({ name: 'fk_idtramite' })
    tramite: TramiteEntity;

    @AutoMap(() => [ActoAdministrativoEntity])
    @OneToMany(() => ActoAdministrativoEntity, (actoAdministrativo) => actoAdministrativo.resolucion)
    @JoinColumn({ name: 'idresolucion' })
    listaActoAdministrativo: ActoAdministrativoEntity[];

    
  
  
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
  
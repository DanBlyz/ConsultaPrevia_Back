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
import { ActoAdministrativoEntity } from './actos-administrativos.entity';
import { ViajeEntity } from './viaje.entity';
 
  
  @Entity('pagocpt', { schema: 'consulta-previa' })
  export class PagoCptEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'idpago' })
    id: number;

    @AutoMap()
    @Column({ name: 'fk_idactos' })
    fk_idActos: number;
  
    @AutoMap()
    @Column({ name: 'pagorealizado',default:false })
    pagoRealizado: boolean;
  
    @AutoMap()
    @Column({ name: 'flujo' ,default:null})
    flujo: string;
  
    @AutoMap()
    @Column({ name: 'diasviaje',default:null })
    diasViaje: number;
  
    @AutoMap()
    @Column({ name: 'tipoviaje',default:null })
    tipoViaje: string;

    @AutoMap()
    @Column({ name: 'montototal',default:0 })
    montoTotal: number;

    @AutoMap()
    @Column({ name: 'apm' ,default:null})
    apm: string;

    @AutoMap()
    @Column({ name: 'descripcion',default:null })
    descripcion: string;

    @AutoMap()
    @Column({ name: 'estado' ,default:null})
    estado: string;

    @AutoMap()
    @Column({ name: 'transaccion' ,default:0})
    transaccion: number;

    @AutoMap()
    @Column({ name: 'fechaactual',default: () => 'NOW()' })
    fechaActual: Date;

    @AutoMap()
    @Column({ name: 'canal',default:null })
    canal: string;

    @AutoMap()
    @Column({ name: 'cpt',default:0 })
    cpt: number;

    @AutoMap()
    @Column({ name: 'fechavigencia',default:null })
    fechaVigencia: Date;

    @AutoMap()
    @Column({ name: 'fechavalidez',default:null })
    fechaValidez: Date;

    @AutoMap()
    @Column({ name: 'iniciovigencia',default:null })
    inicioVigencia: Date;

    @AutoMap()
    @Column({ name: 'tiposervicio',default:null })
    tipoServicio: string;

    @AutoMap()
    @Column({ name: 'cptpdf',default:null })
    cptPdf: string;




    @OneToOne(() => ActoAdministrativoEntity, (actoAdministrativo) => actoAdministrativo.pagoCpt)
    @JoinColumn({ name: 'fk_idactos' })
    actoAdministrativo: ActoAdministrativoEntity;


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
  
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
import { ResolucionEntity } from './resolucion.entity';
import { ProvidenciaEntity } from './providencia.entity';
import { InformeEntity } from './informe.entity';
import { NotificacionEntity } from './notificacion.entity';
import { ActoAdministrativoEntity } from './actos-administrativos.entity';
 
  
  @Entity('tramite', { schema: 'consulta-previa' })
  export class TramiteEntity extends AuditoriaEntity{
    @AutoMap()
    @PrimaryGeneratedColumn({ name: 'idtramite' })
    id: number;
  
    @AutoMap()
    @Column({ name: 'correlativo' })
    correlativo: string;
  
    @AutoMap()
    @Column({ name: 'codigounico' })
    codigoUnico: number;
  
    @AutoMap()
    @Column({ name: 'areaminera' })
    areaMinera: string;
  
    @AutoMap()
    @Column({ name: 'clasificacion' })
    clasificacion: string;
  
    @AutoMap()
    @Column({ name: 'departamento' })
    departamento: string;
  
    @AutoMap()
    @Column({ name: 'provincia' })
    provincia: string;

    @AutoMap()
    @Column({ name: 'municipio' })
    municipio: string;

    @AutoMap(() => [ResolucionEntity])
    @OneToMany(() => ResolucionEntity, (resolucion) => resolucion.tramite)
    @JoinColumn({ name: 'idtramite' })
    listaResolucion: ResolucionEntity[];

    @AutoMap(() => [ProvidenciaEntity])
    @OneToMany(() => ProvidenciaEntity, (providencia) => providencia.tramite)
    @JoinColumn({ name: 'idtramite' })
    listaProvidencia: ProvidenciaEntity[];

    @AutoMap(() => [InformeEntity])
    @OneToMany(() => InformeEntity, (informe) => informe.tramite)
    @JoinColumn({ name: 'idtramite' })
    listaInforme: InformeEntity[];

    @AutoMap(() => [NotificacionEntity])
    @OneToMany(() => NotificacionEntity, (notificacion) => notificacion.tramite)
    @JoinColumn({ name: 'idtramite' })
    listaNotificacion: NotificacionEntity[];
  
    @AutoMap(() => [ActoAdministrativoEntity])
    @OneToMany(() => ActoAdministrativoEntity, (actoAdministrativo) => actoAdministrativo.tramite)
    @JoinColumn({ name: 'idtramite' })
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
  
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { AuditoriaEntity } from './base/auditoria.entity';
import { PersonaEntity, PuestoEntity, UniOrganizacionalEntity } from '.';

@Entity('INFO_LABORAL', { schema: 'personal' })
export class InfoLaboralEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryColumn({ name: 'PERS_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'TIPO_LABORAL' })
  tipoLaboral: string;

  @AutoMap()
  @Column({ name: 'CORREO_INSTITUCIONAL', nullable: true })
  correoInstitucional?: string;

  @AutoMap()
  @Column({ name: 'NUM_INTERNO', nullable: true })
  numInterno?: string;

  @AutoMap()
  @Column({ name: 'ESTADO' })
  estado: string;

  @AutoMap()
  @Column({ name: 'CUENTA', nullable: true })
  cuenta?: string;

  @AutoMap()
  @Column({ name: 'UNI_ORG_ID' })
  uniOrganizacionalId: number;

  @AutoMap()
  @Column({ name: 'PUESTO_ID', nullable: true })
  puestoId: number;

  @OneToOne(() => PersonaEntity, (persona) => persona.infoLaboral)
  @JoinColumn({ name: 'PERS_ID' })
  persona: PersonaEntity;

  @ManyToOne(
    () => UniOrganizacionalEntity,
    (uniOrganizacional) => uniOrganizacional.listaInfoLaboral,
  )
  @JoinColumn({ name: 'UNI_ORG_ID' })
  uniOrganizacional: UniOrganizacionalEntity;

  @ManyToOne(() => PuestoEntity, (puesto) => puesto.listaInfoLaboral)
  @JoinColumn({ name: 'PUESTO_ID' })
  puesto: PuestoEntity;
}

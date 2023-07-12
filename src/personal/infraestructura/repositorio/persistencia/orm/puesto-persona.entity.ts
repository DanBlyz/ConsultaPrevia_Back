import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { AuditoriaEntity } from './base/auditoria.entity';
import { PersonaEntity, PuestoEntity, UniOrganizacionalEntity } from '.';

@Entity('PUESTO_PERSONA', { schema: 'personal' })
export class PuestoPersonaEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'PUESTO_PERS_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'TIPO_MOVILIDAD' })
  tipoMovilidad: string;

  @AutoMap()
  @Column({ name: 'TIPO_LABORAL' })
  tipoLaboral: string;

  @AutoMap()
  @Column({ name: 'FEC_INICIO', type: 'date' })
  fecInicio: Date;

  @AutoMap()
  @Column({ name: 'FEC_CONCLUSION', type: 'date', nullable: true })
  fecConclusion?: Date;

  @AutoMap()
  @Column({ name: 'ES_INTERINATO' })
  esInterinato: boolean;

  @AutoMap()
  @Column({ name: 'TIENE_DESVINCULACION' })
  tieneDesvinculacion: boolean;

  @AutoMap()
  @Column({ name: 'ESTADO' })
  estado: string;

  @AutoMap()
  @Column({ name: 'PUESTO_ID', nullable: true })
  puestoId: number;

  @AutoMap()
  @Column({ name: 'PERS_ID' })
  personaId: number;

  @AutoMap()
  @Column({ name: 'UNI_ORG_ID' })
  uniOrganizacionalId: number;

  @ManyToOne(() => PuestoEntity, (puesto) => puesto.listaPuestoPersona)
  @JoinColumn({ name: 'PUESTO_ID' })
  puesto: PuestoEntity;

  @ManyToOne(() => PersonaEntity, (persona) => persona.listaPuestoPersona)
  @JoinColumn({ name: 'PERS_ID' })
  persona: PersonaEntity;

  @ManyToOne(
    () => UniOrganizacionalEntity,
    (uniOrganizacional) => uniOrganizacional.listaPuestoPersona,
  )
  @JoinColumn({ name: 'UNI_ORG_ID' })
  uniOrganizacional: UniOrganizacionalEntity;
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { AuditoriaEntity } from './base/auditoria.entity';
import {
  InfoLaboralEntity,
  PuestoPersonaEntity,
  UniOrganizacionalEntity,
} from '.';

@Entity('PUESTO', { schema: 'personal' })
export class PuestoEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'PUESTO_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'NOMBRE' })
  nombre: string;

  @AutoMap()
  @Column({ name: 'DESCRIPCION', nullable: true })
  descripcion: string;

  @AutoMap()
  @Column({ name: 'NIVEL_JERARQUICO' })
  nivelJerarquico: number;

  @AutoMap()
  @Column({ name: 'ESTA_ACTIVO' })
  estaActivo: boolean;

  @AutoMap()
  @Column({ name: 'UNI_ORG_ID' })
  uniOrganizacionalId: number;

  @ManyToOne(
    () => UniOrganizacionalEntity,
    (uniOrganizacional) => uniOrganizacional.listaPuesto,
  )
  @JoinColumn({ name: 'UNI_ORG_ID' })
  uniOrganizacional: UniOrganizacionalEntity;

  @OneToMany(() => InfoLaboralEntity, (infoLaboral) => infoLaboral.puesto)
  @JoinColumn({ name: 'PUESTO_ID' })
  listaInfoLaboral: InfoLaboralEntity[];

  @OneToMany(() => PuestoPersonaEntity, (puestoPersona) => puestoPersona.puesto)
  @JoinColumn({ name: 'PUESTO_ID' })
  listaPuestoPersona: PuestoPersonaEntity[];
}

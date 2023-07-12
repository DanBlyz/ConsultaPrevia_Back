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
import { InfoLaboralEntity, PuestoEntity, PuestoPersonaEntity } from '.';

@Entity('UNI_ORGANIZACIONAL', { schema: 'personal' })
export class UniOrganizacionalEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'UNI_ORG_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'CODIGO' })
  codigo: string;

  @AutoMap()
  @Column({ name: 'SIGLA' })
  sigla: string;

  @AutoMap()
  @Column({ name: 'NOMBRE' })
  nombre: string;

  @AutoMap()
  @Column({ name: 'ESTA_ACTIVA' })
  estaActiva: boolean;

  @AutoMap()
  @Column({ name: 'UNI_ORG_SUPERIOR_ID', nullable: true })
  uniOrganizacionalSuperiorId?: number;

  @ManyToOne(
    () => UniOrganizacionalEntity,
    (uniOrganizacional) => uniOrganizacional.listaUniOrganizacional,
  )
  @JoinColumn({ name: 'UNI_ORG_SUPERIOR_ID' })
  uniOrganizacionalSuperior: UniOrganizacionalEntity;

  @OneToMany(
    () => UniOrganizacionalEntity,
    (uniOrganizacional) => uniOrganizacional.uniOrganizacionalSuperior,
  )
  @JoinColumn({ name: 'UNI_ORG_ID' })
  listaUniOrganizacional: UniOrganizacionalEntity[];

  @OneToMany(
    () => InfoLaboralEntity,
    (infoLaboral) => infoLaboral.uniOrganizacional,
  )
  @JoinColumn({ name: 'UNI_ORG_ID' })
  listaInfoLaboral: InfoLaboralEntity[];

  @OneToMany(() => PuestoEntity, (puesto) => puesto.uniOrganizacional)
  @JoinColumn({ name: 'UNI_ORG_ID' })
  listaPuesto: PuestoEntity[];

  @OneToMany(
    () => PuestoPersonaEntity,
    (puestoPersona) => puestoPersona.uniOrganizacional,
  )
  @JoinColumn({ name: 'UNI_ORG_ID' })
  listaPuestoPersona: InfoLaboralEntity[];
}

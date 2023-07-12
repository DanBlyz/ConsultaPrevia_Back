import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { AuditoriaEntity } from './base/auditoria.entity';
import {
  FotografiaEntity,
  InfoLaboralEntity,
  PuestoPersonaEntity,
} from '../orm';

@Entity('PERSONA', { schema: 'personal' })
export class PersonaEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'PERS_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'CODIGO' })
  codigo: string;

  @AutoMap()
  @Column({ name: 'PRIM_APELLIDO' })
  primApellido: string;

  @AutoMap()
  @Column({ name: 'SEG_APELLIDO', nullable: true })
  segApellido: string;

  @AutoMap()
  @Column({ name: 'NOMBRE' })
  nombre: string;

  @AutoMap()
  @Column({ name: 'NUM_DOCUMENTO' })
  numDocumento: string;

  @AutoMap()
  @Column({ name: 'EXPEDICION' })
  expedicion: string;

  @AutoMap()
  @Column({ name: 'FEC_NACIMIENTO', type: 'date' })
  fecNacimiento: Date;

  @AutoMap()
  @Column({ name: 'CORREO_PERSONAL' })
  correoPersonal: string;

  @AutoMap()
  @Column({ name: 'CELULAR_PERSONAL' })
  celularPersonal: string;

  @OneToOne(() => FotografiaEntity, (fotografia) => fotografia.persona)
  fotografia: FotografiaEntity;

  @AutoMap()
  @OneToOne(() => InfoLaboralEntity, (infoLaboral) => infoLaboral.persona)
  infoLaboral: InfoLaboralEntity;

  @OneToMany(
    () => PuestoPersonaEntity,
    (puestoPersona) => puestoPersona.persona,
  )
  @JoinColumn({ name: 'PERS_ID' })
  listaPuestoPersona: PuestoPersonaEntity[];
}

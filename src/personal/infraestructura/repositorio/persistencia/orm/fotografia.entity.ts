import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { PersonaEntity } from '.';

@Entity('FOTOGRAFIA', { schema: 'personal' })
export class FotografiaEntity {
  @AutoMap()
  @PrimaryColumn({ name: 'PERS_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'ARCHIVO' })
  archivo: string;

  @AutoMap()
  @Column({ name: 'TIPO_MIME' })
  tipoMime: string;

  @AutoMap()
  @Column({ name: 'EXTENSION' })
  extension: string;

  @AutoMap()
  @Column({ name: 'TAMANIO' })
  tamanio: number;

  @OneToOne(() => PersonaEntity, (persona) => persona.fotografia)
  @JoinColumn({ name: 'PERS_ID' })
  persona: PersonaEntity;

  @Column({ name: '_USU_CREADOR' })
  _usuCreador: string;

  @Column({ name: '_INST_CREACION', type: 'timestamptz' })
  _instCreacion: Date;
}

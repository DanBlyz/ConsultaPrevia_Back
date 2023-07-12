import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { RolEntity } from '.';

@Entity('GRUPO', { schema: 'control-accesos' })
export class GrupoEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'GRUPO_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'CODIGO' })
  codigo: string;

  @AutoMap()
  @Column({ name: 'NOMBRE' })
  nombre: string;

  @AutoMap()
  @Column({ name: 'DESCRIPCION' })
  descripcion: string;

  @AutoMap(() => [RolEntity])
  @OneToMany(() => RolEntity, (rol) => rol.grupo)
  @JoinColumn({ name: 'GRUPO_ID' })
  listaRol?: RolEntity[];
}

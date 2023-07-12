import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { GrupoEntity, RolCuentaEntity } from '.';

@Entity('ROL', { schema: 'control-accesos' })
export class RolEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'ROL_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'CODIGO' })
  codigo: string;

  @AutoMap()
  @Column({ name: 'NOMBRE' })
  nombre: string;

  @AutoMap()
  @Column({ name: 'GRUPO_ID' })
  grupoId: number;

  @ManyToOne(() => GrupoEntity, (grupo) => grupo.listaRol)
  @JoinColumn({ name: 'GRUPO_ID' })
  grupo: GrupoEntity;

  @OneToMany(() => RolCuentaEntity, (rolCuenta) => rolCuenta.rol)
  @JoinColumn({ name: 'ROL_ID' })
  listaRolCuenta?: RolCuentaEntity[];
}

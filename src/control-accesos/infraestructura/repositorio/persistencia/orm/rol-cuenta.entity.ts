import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { AuditoriaEntity } from './base/auditoria.entity';
import { CuentaEntity, RolEntity } from '.';

@Entity('ROL_CUENTA', { schema: 'control-accesos' })
export class RolCuentaEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'ROL_CUENTA_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'INST_REGISTRO' })
  instRegistro: Date;

  @AutoMap()
  @Column({ name: 'FEC_INICIO' })
  fecInicio: Date;

  @AutoMap()
  @Column({ name: 'FEC_CONCLUSION' })
  fecConclusion: Date;

  @AutoMap()
  @Column({ name: 'ROL_ID' })
  rolId: number;

  @AutoMap()
  @Column({ name: 'CUENTA_ID' })
  cuentaId: number;

  @ManyToOne(() => RolEntity, (rol) => rol.listaRolCuenta)
  @JoinColumn({ name: 'ROL_ID' })
  rol: RolEntity;

  @ManyToOne(() => CuentaEntity, (cuenta) => cuenta.listaRolCuenta)
  @JoinColumn({ name: 'CUENTA_ID' })
  cuenta: CuentaEntity;
}

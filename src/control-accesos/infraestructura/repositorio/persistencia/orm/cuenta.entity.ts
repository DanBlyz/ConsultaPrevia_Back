import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { AuditoriaEntity } from './base/auditoria.entity';
import { RolCuentaEntity, UsuarioEntity } from '.';

@Entity('CUENTA', { schema: 'control-accesos' })
export class CuentaEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'CUENTA_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'CODIGO' })
  codigo: string;

  @AutoMap()
  @Column({ name: 'MODO_AUTENTICACION' })
  modoAutenticacion: string;

  @AutoMap()
  @Column({ name: 'NOMBRE' })
  nombre: string;

  @AutoMap()
  @Column({ name: 'CLAVE' })
  clave: string;

  @AutoMap()
  @Column({ name: 'CONTRASENIA' })
  contrasenia: string;

  @AutoMap()
  @Column({ name: 'ESTA_AUTORIZADA' })
  estaAutorizada: boolean;

  @AutoMap()
  @Column({ name: 'INST_ULT_SESION', nullable: true })
  instUltSesion: Date;

  @AutoMap()
  @Column({ name: 'NUM_INT_FALLIDOS' })
  numIntFallidos: number;

  @AutoMap()
  @Column({ name: 'ESTA_BLOQUEADA' })
  estaBloqueada: boolean;

  @AutoMap()
  @Column({ name: 'INST_ULT_BLOQUEO', nullable: true })
  instUltBloqueo: Date;

  @OneToOne(() => UsuarioEntity, (usuario) => usuario.cuenta)
  @JoinColumn({ name: 'CUENTA_ID' })
  usuario: UsuarioEntity;

  @OneToMany(() => RolCuentaEntity, (rolCuenta) => rolCuenta.cuenta)
  @JoinColumn({ name: 'CUENTA_ID' })
  listaRolCuenta: RolCuentaEntity[];
}

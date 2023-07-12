import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { AuditoriaEntity } from './base/auditoria.entity';
import { CuentaEntity } from '.';

@Entity('USUARIO', { schema: 'control-accesos' })
export class UsuarioEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryColumn({ name: 'CUENTA_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'NOMBRE' })
  nombre: string;

  @AutoMap()
  @Column({ name: 'APELLIDO' })
  apellido: string;

  @AutoMap()
  @Column({ name: 'NOM_PUBLICO' })
  nomPublico: string;

  @AutoMap()
  @Column({ name: 'CORREO_ELECTRONICO' })
  correoElectronico: string;

  @OneToOne(() => CuentaEntity, (usuario) => usuario.usuario)
  @JoinColumn({ name: 'CUENTA_ID' })
  cuenta: CuentaEntity;

  public get codCuenta(): string {
    return this.cuenta.codigo;
  }
}

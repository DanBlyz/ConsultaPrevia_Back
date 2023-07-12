import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AutoMap } from '@automapper/classes';

import { AuditoriaEntity } from './base/auditoria.entity';

@Entity('PARAMETRO', { schema: 'personal' })
export class ParametroEntity extends AuditoriaEntity {
  @AutoMap()
  @PrimaryGeneratedColumn({ name: 'PARAM_ID' })
  id: number;

  @AutoMap()
  @Column({ name: 'TIPO' })
  tipo: string;

  @AutoMap()
  @Column({ name: 'ORDEN' })
  orden: number;

  @AutoMap()
  @Column({ name: 'VALOR' })
  valor: string;

  @AutoMap()
  @Column({ name: 'TEXTO' })
  texto: string;

  @AutoMap()
  @Column({ name: 'ESTA_ACTIVO' })
  estaActivo: boolean;
}

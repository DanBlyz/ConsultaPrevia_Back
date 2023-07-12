import { Column, DeleteDateColumn } from 'typeorm';

export abstract class AuditoriaEntity {
  @Column({ name: '_USU_CREADOR' })
  _usuCreador: string;

  @Column({ name: '_INST_CREACION', type: 'timestamptz' })
  _instCreacion: Date;

  @Column({ name: '_USU_MODIFICACION', nullable: true })
  _usuModificacion: string;

  @Column({ name: '_INST_MODIFICACION', type: 'timestamptz', nullable: true })
  _instModificacion: Date;

  @Column({ name: '_USU_ELIMINACION', nullable: true })
  _usuEliminacion: string;

  @DeleteDateColumn({
    name: '_INST_ELIMINACION',
    type: 'timestamptz',
    nullable: true,
  })
  _instEliminacion: Date;
}

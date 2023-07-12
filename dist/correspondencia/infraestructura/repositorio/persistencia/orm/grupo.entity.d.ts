import { AuditoriaEntity } from './base/auditoria.entity';
import { RolEntity } from '.';
export declare class GrupoEntity extends AuditoriaEntity {
    id: number;
    codigo: string;
    nombre: string;
    descripcion: string;
    listaRol?: RolEntity[];
}

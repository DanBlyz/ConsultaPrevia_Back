import { AuditoriaEntity } from './base/auditoria.entity';
import { CuentaEntity } from '.';
export declare class UsuarioEntity extends AuditoriaEntity {
    id: number;
    nombre: string;
    apellido: string;
    nomPublico: string;
    correoElectronico: string;
    cuenta: CuentaEntity;
    get codCuenta(): string;
}

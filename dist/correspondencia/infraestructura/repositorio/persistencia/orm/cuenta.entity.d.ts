import { AuditoriaEntity } from './base/auditoria.entity';
import { RolCuentaEntity, UsuarioEntity } from '.';
export declare class CuentaEntity extends AuditoriaEntity {
    id: number;
    codigo: string;
    modoAutenticacion: string;
    nombre: string;
    contrasenia: string;
    estaAutorizada: boolean;
    instUltSesion: Date;
    numIntFallidos: number;
    estaBloqueada: boolean;
    instUltBloqueo: Date;
    usuario: UsuarioEntity;
    listaRolCuenta: RolCuentaEntity[];
}

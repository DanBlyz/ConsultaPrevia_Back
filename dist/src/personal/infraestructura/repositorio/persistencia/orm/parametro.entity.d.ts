import { AuditoriaEntity } from './base/auditoria.entity';
export declare class ParametroEntity extends AuditoriaEntity {
    id: number;
    tipo: string;
    orden: number;
    valor: string;
    texto: string;
    estaActivo: boolean;
}

import { PersonaEntity } from '.';
export declare class FotografiaEntity {
    id: number;
    archivo: string;
    tipoMime: string;
    extension: string;
    tamanio: number;
    persona: PersonaEntity;
    _usuCreador: string;
    _instCreacion: Date;
}

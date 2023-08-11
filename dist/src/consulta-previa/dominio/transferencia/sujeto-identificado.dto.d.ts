import { InformeDto } from './informe.dto';
export declare class SujetoIdentificadoDto {
    id: number;
    fk_idDocumento: number;
    comunidad: string;
    autoridad: string;
    telefono: number;
    informe?: InformeDto[];
}
export declare class SujetoIdentificadoCreacionDto {
    fk_idDocumento: number;
    comunidad: string;
    autoridad: string;
    telefono: number;
}
export declare class SujetoIdentificadoModificacionDto {
    comunidad?: string;
    autoridad?: string;
    telefono?: number;
}

import { DocumentoDto } from './documento.dto';
export declare class SujetoIdentificadoDto {
    id: number;
    fk_idDocumento: number;
    comunidad: string;
    autoridad: string;
    telefono: number;
    estado: string;
    documento?: DocumentoDto[];
}
export declare class SujetoIdentificadoCreacionDto {
    fk_idDocumento: number;
    comunidad: string;
    autoridad: string;
    telefono: number;
    estado?: string;
}
export declare class SujetoIdentificadoModificacionDto {
    comunidad?: string;
    autoridad?: string;
    telefono?: number;
    estado?: string;
}

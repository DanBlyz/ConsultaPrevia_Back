export declare class SujetoIdentificadoDto {
    id: number;
    fk_idInforme: number;
    comunidad: string;
    representante: number;
}
export declare class SujetoIdentificadoCreacionDto {
    fk_idInforme: number;
    comunidad: string;
    representante: string;
}
export declare class SujetoIdentificadoModificacionDto {
    comunidad?: string;
    representante?: string;
}

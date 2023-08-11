import { Informe } from './informe.model';
export declare class SujetoIdentificado {
    id: number;
    fk_idDocumento: number;
    comunidad: string;
    autoridad: string;
    telefono: number;
    informe?: Informe;
}

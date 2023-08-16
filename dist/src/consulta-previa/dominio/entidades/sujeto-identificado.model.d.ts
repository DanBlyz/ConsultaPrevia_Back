import { Documento } from './documento.model';
export declare class SujetoIdentificado {
    id: number;
    fk_idDocumento: number;
    comunidad: string;
    autoridad: string;
    telefono: number;
    estado: string;
    documento?: Documento;
}

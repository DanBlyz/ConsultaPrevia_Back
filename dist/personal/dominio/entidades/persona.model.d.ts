import { InfoLaboral, PuestoPersona } from '.';
export declare class Persona {
    id: number;
    codigo: string;
    primApellido: string;
    segApellido?: string;
    nombre: string;
    numDocumento: string;
    expedicion: string;
    fecNacimiento: Date;
    correoPersonal: string;
    celularPersonal: string;
    infoLaboral?: InfoLaboral;
    interinato?: PuestoPersona;
    tieneFotografia: boolean;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}

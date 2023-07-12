import { InfoLaboralDto, PuestoPersonaDto } from '.';
export declare class PersonaDto {
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
    infoLaboral?: InfoLaboralDto;
    interinato?: PuestoPersonaDto;
    tieneFotografia: boolean;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class PersonaCreacionDto {
    primApellido: string;
    segApellido?: string;
    nombre: string;
    numDocumento: string;
    expedicion: string;
    fecNacimiento: Date;
    correoPersonal: string;
    celularPersonal: string;
}
export declare class PersonaModificacionDto {
    primApellido?: string;
    segApellido?: string;
    nombre?: string;
    numDocumento?: string;
    expedicion?: string;
    fecNacimiento?: Date;
    correoPersonal?: string;
    celularPersonal?: string;
}

export declare class ViajeDto {
    id: number;
    fk_idActos: number;
    fechaInicio: Date;
    fechaFin: Date;
    descripcion: string;
    nroFormulario: string;
    formularioPdf: string;
}
export declare class ViajeCreacionDto {
    fk_idActos: number;
    fechaInicio: Date;
    fechaFin: Date;
    descripcion: string;
    nroFormulario: string;
    formularioPdf: string;
}
export declare class ViajeModificacionDto {
    fechaInicio?: Date;
    fechaFin?: Date;
    descripcion?: string;
    nroFormulario?: string;
    formularioPdf?: string;
}

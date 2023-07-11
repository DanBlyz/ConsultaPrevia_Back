import { ParticipanteCreacionDto, ParticipanteDto, ParticipanteModificacionDto } from './participante.dto';
export declare class DocumentoDto {
    id: string;
    numero: string;
    gestion: string;
    cite: string;
    citeExterno: string;
    instRegistro: Date;
    fecha: Date;
    referencia: string;
    numHojas: number;
    prioridad: string;
    observacion?: string;
    esBorrador: boolean;
    estaImpreso: boolean;
    hojaRutaId: number;
    tipoDocumentoId: number;
    clasificacionId: number;
    hojaRutaNumero: string;
    tipoDocumentoNombre: string;
    clasificacionNombre: string;
    listaParticipante?: ParticipanteDto[];
    entidadSigla?: string;
    uinOrganizacionalId?: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}
export declare class DocumentoCreacionDto {
    citeExterno: string;
    fecha: Date;
    referencia: string;
    numHojas: number;
    prioridad: string;
    observacion?: string;
    hojaRutaId: number;
    tipoDocumentoId: number;
    clasificacionId: number;
    listaParticipante?: ParticipanteCreacionDto[];
}
export declare class DocumentoModificacionDto {
    citeExterno?: string;
    fecha?: Date;
    referencia?: string;
    numHojas?: number;
    prioridad?: string;
    observacion?: string;
    esBorrador?: boolean;
    estaImpreso?: boolean;
    hojaRutaId?: number;
    tipoDocumentoId?: number;
    clasificacionId?: number;
    listaParticipante?: ParticipanteModificacionDto[];
}

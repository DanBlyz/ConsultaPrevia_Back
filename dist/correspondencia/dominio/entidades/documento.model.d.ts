import { Participante } from '.';
export declare class Documento {
    id: number;
    numero: number;
    gestion: number;
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
    listaParticipante?: Participante[];
    entidadSigla?: string;
    uniOrganizacionalId?: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}

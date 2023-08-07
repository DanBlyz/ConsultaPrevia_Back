/// <reference types="node" />
import { Readable } from 'stream';
export declare class FuncionesHelper {
    static contiene(lista1: string[], lista2: string[]): boolean;
    static obtenerSHA1(cadena: string): string;
    static obtenerSHA1Aleatorio(): string;
    static obtenerCadenaAleatoria(base?: number): string;
    static generarHexadecimal(): string;
    static obtenerStream(archivoBase64: string): Readable;
}

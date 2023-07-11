import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
export declare class LdapController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    obtenerPorUid(uid: string): Promise<"Esta conectado" | "No esta conetado">;
}

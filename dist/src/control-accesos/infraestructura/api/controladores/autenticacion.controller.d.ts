import { IServicioFactory } from '../../../dominio/contratos/aplicacion';
import { AutenticacionDto, UsuarioModificacionDto } from '../../../dominio/transferencia';
export declare class AutenticacionController {
    private servicioFactory;
    constructor(servicioFactory: IServicioFactory);
    registrarCuenta(objetoDto: any): Promise<any>;
    actualizarUsuario(codCuenta: string, objetoDto: UsuarioModificacionDto): Promise<any>;
    cambiarContrasenia(codCuenta: string, objetoDto: any): Promise<any>;
    obtenerPorCodigo(codigo: string): Promise<any>;
    obtenerToken(objetoDto: AutenticacionDto): Promise<any>;
    obtenerTokenLdap(objetoDto: AutenticacionDto): Promise<any>;
}

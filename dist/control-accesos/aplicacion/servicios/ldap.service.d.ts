import { ConfigService } from '@nestjs/config';
import { Mapper } from '@automapper/core';
import { JwtService } from '@nestjs/jwt';
import { IRepositorioFactory } from '../../dominio/contratos/infraestructura/persistencia';
import { ILdapServicio } from '../../dominio/contratos/aplicacion/servicios';
import { CuentaLdap } from '../../dominio/entidades';
import { AutenticacionDto } from '../../dominio/transferencia';
export declare class LdapService implements ILdapServicio {
    private configService;
    private repositorioFactory;
    private readonly mapper;
    private jwtService;
    constructor(configService: ConfigService, repositorioFactory: IRepositorioFactory, mapper: Mapper, jwtService: JwtService);
    private iniciarConexionLdap;
    private validar;
    obtenerPorUid(uid: string): Promise<CuentaLdap>;
    obtenerToken(objetoDto: AutenticacionDto): Promise<any>;
}
export declare const LDAP_SERVICIO_PROVIDER: {
    provide: string;
    useClass: typeof LdapService;
};

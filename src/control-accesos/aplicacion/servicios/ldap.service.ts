import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { JwtService } from '@nestjs/jwt';
import { Client } from 'ldapts';

import {
  IRepositorioFactory,
  REPOSITORIO_FACTORY,
} from '../../dominio/contratos/infraestructura/persistencia';
import {
  ILdapServicio,
  LDAP_SERVICIO,
} from '../../dominio/contratos/aplicacion/servicios';
import {
  Cuenta,
  CuentaLdap,
  RolCuenta,
  Usuario,
} from '../../dominio/entidades';
import { CuentaService } from '../servicios';
import { AutenticacionDto } from '../../dominio/transferencia';

@Injectable()
export class LdapService implements ILdapServicio {
  constructor(
    private configService: ConfigService,
    @Inject(REPOSITORIO_FACTORY)
    private repositorioFactory: IRepositorioFactory,
    @InjectMapper() private readonly mapper: Mapper,
    private jwtService: JwtService,
  ) {}

  private async iniciarConexionLdap(): Promise<Client> {

    const url = 'ldap://172.16.170.61:389';
    const bindDN = 'cn=admin,dc=autoridadminera,dc=local';
    const password = 'Usuario123';

    let clienteLdap = new Client({
      //url: this.configService.get('LDAP_SERVIDOR'),
      url,
    });
    let isAuthenticated;
    try {
      /*await clienteLdap.bind(
        `cn=${this.configService.get(
          'LDAP_CUENTA_ADMINISTRADOR',
        )},${this.configService.get('LDAP_BASE_BIND_DN')}`,
        this.configService.get('LDAP_CONTRASENIA_ADMINISTRADOR'),
      );*/
      await clienteLdap.bind(bindDN, password);
      isAuthenticated = true;
    } catch (ex) {
      //clienteLdap = null;
      isAuthenticated = false;
    } finally {
      await clienteLdap?.unbind();
    }
    return isAuthenticated;
  }

  private async validar(nombre: string, contrasenia: string): Promise<boolean> {
    let respuesta = false;
    const clienteLdap = await this.iniciarConexionLdap();
    if (clienteLdap) {
      let respuestaLdap = null;
      if (nombre.indexOf('@') > 0) {
        respuestaLdap = await clienteLdap.search(
          `ou=${this.configService.get(
            'LDAP_GRUPO_USUARIOS',
          )},${this.configService.get('LDAP_BASE_BIND_DN')}`,
          {
            scope: 'sub',
            filter: `(mail=${nombre})`,
          },
        );
      } else {
        respuestaLdap = await clienteLdap.search(
          `ou=${this.configService.get(
            'LDAP_GRUPO_USUARIOS',
          )},${this.configService.get('LDAP_BASE_BIND_DN')}`,
          {
            scope: 'sub',
            filter: `(uid=${nombre})`,
          },
        );
      }
      if (respuestaLdap.searchEntries.length > 0) {
        try {
          await clienteLdap.bind(
            `uid=${
              respuestaLdap.searchEntries[0].uid
            },ou=${this.configService.get(
              'LDAP_GRUPO_USUARIOS',
            )},${this.configService.get('LDAP_BASE_BIND_DN')}`,
            contrasenia,
          );
          respuesta = true;
        } catch (ex) {
          respuesta = false;
        } finally {
          await clienteLdap?.unbind();
        }
      } else {
        await clienteLdap?.unbind();
      }
    }
    return respuesta;
  }

  async obtenerPorUid(uid: string): Promise<CuentaLdap> {
    let objeto = null;
    const clienteLdap = await this.iniciarConexionLdap();
    if (clienteLdap) {
     /* const respuestaLdap = await clienteLdap.search(
        `ou=${this.configService.get(
          'LDAP_GRUPO_USUARIOS',
        )},${this.configService.get('LDAP_BASE_BIND_DN')}`,
        {
          scope: 'sub',
          filter: `(uid=${uid})`,
        },
      );
      if (respuestaLdap.searchEntries.length > 0) {
        objeto = new CuentaLdap();
        objeto.uid = respuestaLdap.searchEntries[0].uid;
        objeto.cn = respuestaLdap.searchEntries[0].cn;
        objeto.givenName = respuestaLdap.searchEntries[0].givenName;
        objeto.sn = respuestaLdap.searchEntries[0].sn;
        objeto.displayName = respuestaLdap.searchEntries[0].displayName;
        objeto.mail = respuestaLdap.searchEntries[0].mail;
        objeto.title = respuestaLdap.searchEntries[0].title;
      }
      await clienteLdap?.unbind();*/
      objeto = true;
    }
    else
    {
      objeto = false;
    }
    return objeto;
  }

  async obtenerToken(objetoDto: AutenticacionDto): Promise<any> {
    const cuentaServicio = new CuentaService(
      this.repositorioFactory,
      this.mapper,
      this.jwtService,
    );

    /*const usuarioValido = await this.validar(
      objetoDto.cuenta,
      objetoDto.contrasenia,
    );
    if (!usuarioValido) {
      return await {
        access_token: null,
      };
    }*/
    /*const cuentaBD: Cuenta =
      await this.repositorioFactory.cuentaRepositorio.obtenerPorNombre(
        objetoDto.cuenta,
      );*/
   /*if (cuentaBD) {
      const usuarioBD: Usuario =
        await this.repositorioFactory.usuarioRepositorio.obtenerPorId(
          cuentaBD.id,
        );*/
      // const listaRolCuentaBD: RolCuenta[] =
      //   await this.repositorioFactory.rolCuentaRepositorio.obtenerPorGrupo(
      //     objetoDto.grupos,
      //     cuentaBD.id,
      //   );
      // if (listaRolCuentaBD.length === 0) {
      //   return await {
      //     access_token: null,
      //   };
      // }
      // const payload = {
      //   user_id: cuentaBD.codigo,
      //   name: usuarioBD ? usuarioBD.nomPublico : '',
      //   given_name: usuarioBD ? usuarioBD.nombre : '',
      //   family_name: usuarioBD ? usuarioBD.apellido : '',
      //   nickname: cuentaBD.nombre,
      //   picture: null,
      //   email: usuarioBD ? usuarioBD.correoElectronico : '',
      //   nonce: '',
      //   auth: 'LDAP',
      //   roles: listaRolCuentaBD.map((rolCuenta) => {
      //     return rolCuenta.rolGrupoCodigo + ' - ' + rolCuenta.rolNombre;
      //   }),
      //   roles: '',
      // };
      const payload = {
        user_id: '',
        name: '',
        given_name: '',
        family_name: '',
        nickname: '',
        picture: null,
        email: '',
        nonce: '',
        auth: 'LDAP',
        roles: '',
      };

      /*cuentaBD.instUltSesion = new Date();
      if (cuentaBD.numIntFallidos > 0) {
        cuentaBD.numIntFallidos = 0;
      }*/
      //await cuentaServicio.modificar(cuentaBD.id, cuentaBD);

      return await {
        access_token: this.jwtService.sign(payload),
      };
    /*} else {
      await cuentaServicio.establecerIntentoFallido(objetoDto.cuenta);
      return await {
        access_token: null,
      };
    }*/
  }
}

export const LDAP_SERVICIO_PROVIDER = {
  provide: LDAP_SERVICIO,
  useClass: LdapService,
};

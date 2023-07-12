import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';

import {
  RespuestaObjetoDto,
  TipoRespuesta,
} from '../../../../comun/transferencia';
import { JwtAuthGuard } from '../../../../comun/sesion/jwt';

import {
  IServicioFactory,
  SERVICIO_FACTORY,
} from '../../../dominio/contratos/aplicacion';
import { CuentaLdapDto } from '../../../dominio/transferencia';

//@UseGuards(JwtAuthGuard)
@Controller('ldap')
export class LdapController {
  constructor(
    @Inject(SERVICIO_FACTORY)
    private servicioFactory: IServicioFactory,
  ) {}

  @Get(':uid')
  async obtenerPorUid(@Param('uid') uid: string) {
    const objetoDto = await this.servicioFactory.ldapServicio.obtenerPorUid(
      uid,
    );
    if(objetoDto)
    {
      return 'Esta conectado';
    }
    else
    {
      return 'No esta conetado';
    }
    // if (objetoDto) {
    //   return new RespuestaObjetoDto<CuentaLdapDto>(
    //     TipoRespuesta.Exito,
    //     '',
    //     objetoDto,
    //   );
    // } else {
    //   return new RespuestaObjetoDto<CuentaLdapDto>(
    //     TipoRespuesta.Error,
    //     'No se encontraron registros',
    //     objetoDto,
    //   );
    // }
  }
}

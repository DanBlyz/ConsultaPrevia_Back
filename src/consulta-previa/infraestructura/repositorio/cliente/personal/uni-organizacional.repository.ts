import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Identidad } from '../../../../../comun/sesion/identidad';
import { ListaPaginada } from '../../../../../comun/modelos';

import { IUniOrganizacionalRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { UniOrganizacional } from '../../../../dominio/entidades';
import { UniOrganizacionalFiltro } from '../../../../dominio/entidades/filtros';
import { UniOrganizacionalFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class UniOrganizacionalRepositorio
  implements IUniOrganizacionalRepositorio
{
  private identidad: Identidad;
  private urlBase: string;
  private controlador: string;

  constructor(private readonly httpService: HttpService) {
    this.identidad = Identidad.getInstance();
    this.urlBase = 'http://localhost:3000/personal';
    this.controlador = 'uni-organizacionales';
  }

  async obtenerPorId(id: number): Promise<any> {
    return new Promise((resolve) => {
      this.httpService
        .get<UniOrganizacional>(`${this.urlBase}/${this.controlador}/${id}`, {
          headers: {
            Authorization: `bearer ${this.identidad.accessToken}`,
          },
        })
        .subscribe((respuesta) => {
          resolve(respuesta.data['objeto']);
        });
    });
  }

  async obtenerObjetoPor(
    objeto: Partial<UniOrganizacionalFiltro>,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<UniOrganizacional> {
    const objetoDto = new UniOrganizacionalFiltroDto();
    objetoDto.paginado = {
      pagina: 1,
      registrosPorPagina: 1,
      ordenadoPor: ordenarPor,
      orden: orden,
    };
    return new Promise((resolve) => {
      this.httpService
        .post<UniOrganizacional>(
          `${this.urlBase}/${this.controlador}/buscar?p=1&c=1`,
          objetoDto,
          {
            headers: {
              Authorization: `bearer ${this.identidad.accessToken}`,
            },
          },
        )
        .subscribe((respuesta) => {
          resolve(respuesta.data['lista'][0]);
        });
    });
  }

  async obtenerPor(
    objeto: Partial<UniOrganizacionalFiltro>,
    pagina: number,
    registrosPorPagina: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<UniOrganizacional>> {
    const objetoDto = new UniOrganizacionalFiltroDto();
    objetoDto.paginado = {
      pagina: pagina,
      registrosPorPagina: registrosPorPagina,
      ordenadoPor: ordenarPor,
      orden: orden,
    };
    return new Promise((resolve) => {
      this.httpService
        .post<UniOrganizacional>(
          `${this.urlBase}/${this.controlador}/buscar`,
          objetoDto,
          {
            headers: {
              Authorization: `bearer ${this.identidad.accessToken}`,
            },
          },
        )
        .subscribe((respuesta) => {
          resolve(
            new ListaPaginada<UniOrganizacional>(
              respuesta.data['lista'],
              respuesta.data['paginado'].totalRegistros,
            ),
          );
        });
    });
  }
}

export const UNI_ORGANIZACIONAL_REPOSITORIO_PROVIDER = {
  provide: 'UNI_ORGANIZACIONAL_REPOSITORIO',
  useClass: UniOrganizacionalRepositorio,
};

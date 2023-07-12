import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Identidad } from '../../../../../comun/sesion/identidad';
import { ListaPaginada } from '../../../../../comun/modelos';

import { IPuestoRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Puesto } from '../../../../dominio/entidades';
import { PuestoFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class PuestoRepositorio implements IPuestoRepositorio {
  private identidad: Identidad;
  private urlBase: string;
  private controlador: string;

  constructor(private readonly httpService: HttpService) {
    this.identidad = Identidad.getInstance();
    this.urlBase = 'http://localhost:3000/personal';
    this.controlador = 'puestos';
  }

  async obtenerPorId(id: number): Promise<any> {
    return new Promise((resolve) => {
      this.httpService
        .get<Puesto>(`${this.urlBase}/${this.controlador}/${id}`, {
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
    objeto: Partial<PuestoFiltroDto>,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Puesto> {
    objeto.paginado = {
      pagina: 1,
      registrosPorPagina: 1,
      ordenadoPor: ordenarPor,
      orden: orden,
    };
    return new Promise((resolve) => {
      this.httpService
        .post<Puesto>(
          `${this.urlBase}/${this.controlador}/buscar?p=1&c=1`,
          objeto,
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
    objeto: Partial<PuestoFiltroDto>,
    pagina: number,
    registrosPorPagina: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Puesto>> {
    objeto.paginado = {
      pagina: pagina,
      registrosPorPagina: registrosPorPagina,
      ordenadoPor: ordenarPor,
      orden: orden,
    };
    return new Promise((resolve) => {
      this.httpService
        .post<Puesto>(`${this.urlBase}/${this.controlador}/buscar`, objeto, {
          headers: {
            Authorization: `bearer ${this.identidad.accessToken}`,
          },
        })
        .subscribe((respuesta) => {
          resolve(
            new ListaPaginada<Puesto>(
              respuesta.data['lista'],
              respuesta.data['paginado'].totalRegistros,
            ),
          );
        });
    });
  }
}

export const PUESTO_REPOSITORIO_PROVIDER = {
  provide: 'PUESTO_REPOSITORIO',
  useClass: PuestoRepositorio,
};

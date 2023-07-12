import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import { Identidad } from '../../../../../comun/sesion/identidad';
import { ListaPaginada } from '../../../../../comun/modelos';

import { IPersonaRepositorio } from '../../../../dominio/contratos/infraestructura/repositorios';
import { Persona } from '../../../../dominio/entidades';
import { PersonaFiltroDto } from '../../../../dominio/transferencia/filtros';

@Injectable()
export class PersonaRepositorio implements IPersonaRepositorio {
  private identidad: Identidad;
  private urlBase: string;
  private controlador: string;

  constructor(private readonly httpService: HttpService) {
    this.identidad = Identidad.getInstance();
    this.urlBase = 'http://localhost:3000/personal';
    this.controlador = 'personas';
  }

  async obtenerPorId(id: number): Promise<any> {
    return new Promise((resolve) => {
      this.httpService
        .get<Persona>(`${this.urlBase}/${this.controlador}/${id}`, {
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
    objeto: Partial<PersonaFiltroDto>,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<Persona> {
    objeto.paginado = {
      pagina: 1,
      registrosPorPagina: 1,
      ordenadoPor: ordenarPor,
      orden: orden,
    };
    return new Promise((resolve) => {
      this.httpService
        .post<Persona>(
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
    objeto: Partial<PersonaFiltroDto>,
    pagina: number,
    registrosPorPagina: number,
    ordenarPor = 'id',
    orden: 'ASC' | 'DESC' = 'DESC',
  ): Promise<ListaPaginada<Persona>> {
    objeto.paginado = {
      pagina: pagina,
      registrosPorPagina: registrosPorPagina,
      ordenadoPor: ordenarPor,
      orden: orden,
    };
    return new Promise((resolve) => {
      this.httpService
        .post<Persona>(`${this.urlBase}/${this.controlador}/buscar`, objeto, {
          headers: {
            Authorization: `bearer ${this.identidad.accessToken}`,
          },
        })
        .subscribe((respuesta) => {
          resolve(
            new ListaPaginada<Persona>(
              respuesta.data['lista'],
              respuesta.data['paginado'].totalRegistros,
            ),
          );
        });
    });
  }
}

export const PERSONA_REPOSITORIO_PROVIDER = {
  provide: 'PERSONA_REPOSITORIO',
  useClass: PersonaRepositorio,
};

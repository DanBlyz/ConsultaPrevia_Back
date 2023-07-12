export class PaginadoFiltroDto {
  pagina: number;
  registrosPorPagina: number;
  ordenadoPor?: string;
  orden?: 'ASC' | 'DESC';
}

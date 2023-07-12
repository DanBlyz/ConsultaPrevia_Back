export class PaginadoDto {
  public totalPaginas: number;

  constructor(
    public totalRegistros: number,
    public registrosPorPagina: number,
    public pagina: number,
  ) {
    this.totalPaginas = Math.ceil(totalRegistros / registrosPorPagina);
  }
}

export class ListaPaginadaDto<T> {
  constructor(public lista: T[], public totalRegistros: number) {}
}

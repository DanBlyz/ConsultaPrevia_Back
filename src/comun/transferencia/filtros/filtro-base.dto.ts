import { IsOptional } from 'class-validator';

import { PaginadoFiltroDto } from './paginado-filtro.dto';

export class FiltroBaseDto {
  @IsOptional()
  paginado?: PaginadoFiltroDto;
}

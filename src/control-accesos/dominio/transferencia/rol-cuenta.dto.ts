import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { CuentaDto, RolDto } from '.';

export class RolCuentaDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsDate()
  instRegistro: Date;

  @AutoMap()
  @IsDate()
  fecInicio: Date;

  @AutoMap()
  @IsDate()
  @IsOptional()
  fecConclusion?: Date;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  rolId: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  cuentaId: number;

  @AutoMap()
  @IsOptional()
  rol?: RolDto;

  @AutoMap()
  @IsOptional()
  cuenta?: CuentaDto;

  @AutoMap()
  @IsString()
  @IsOptional()
  rolNombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  rolGrupoCodigo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  rolGrupoNombre?: string;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class RolCuentaCreacionDto {
  @AutoMap()
  @IsDate()
  fecInicio: Date;

  @AutoMap()
  @IsDate()
  @IsOptional()
  fecConclusion?: Date;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  rolId: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  cuentaId: number;
}

export class RolCuentaModificacionDto {
  @AutoMap()
  @IsDate()
  @IsOptional()
  fecInicio?: Date;

  @AutoMap()
  @IsDate()
  @IsOptional()
  fecConclusion?: Date;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  rolId?: number;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  cuentaId?: number;
}

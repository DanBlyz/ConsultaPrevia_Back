import { AutoMap } from '@automapper/classes';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { GrupoDto, RolCuentaDto } from '.';

export class RolDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  codigo: string;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  grupoId: number;

  @AutoMap()
  @IsOptional()
  grupo?: GrupoDto;

  @AutoMap()
  @IsString()
  @IsOptional()
  grupoCodigo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  grupoNombre?: string;

  @AutoMap()
  @IsArray()
  @IsOptional()
  listaRolCuenta?: RolCuentaDto[];

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class RolCreacionDto {
  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  grupoId: number;
}

export class RolModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  grupoId?: number;
}

import { AutoMap } from '@automapper/classes';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { RolDto } from '.';

export class GrupoDto {
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
  @IsString()
  descripcion: string;

  @AutoMap(() => [RolDto])
  @IsArray()
  @IsOptional()
  listaRol?: RolDto[];

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class GrupoCreacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  codigo?: string;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  descripcion: string;
}

export class GrupoModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  codigo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  descripcion?: string;
}

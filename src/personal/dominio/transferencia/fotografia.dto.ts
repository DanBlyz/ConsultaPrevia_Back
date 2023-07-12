import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { PersonaDto } from '.';

export class FotografiaDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  archivo: string;

  @AutoMap()
  @IsString()
  tipoMime: string;

  @AutoMap()
  @IsString()
  extension: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  tamanio: number;

  @AutoMap()
  @IsOptional()
  persona?: PersonaDto;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class FotografiaCreacionDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  archivo: string;

  @AutoMap()
  @IsString()
  tipoMime: string;

  @AutoMap()
  @IsString()
  extension: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  tamanio: number;
}

export class FotografiaModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  archivo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  tipoMime?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  extension?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  tamanio?: number;
}

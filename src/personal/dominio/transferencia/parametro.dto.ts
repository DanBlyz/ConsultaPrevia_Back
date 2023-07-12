import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class ParametroDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  tipo: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  orden: number;

  @AutoMap()
  @IsString()
  valor: string;

  @AutoMap()
  @IsString()
  texto: string;

  @AutoMap()
  @IsBoolean()
  estaActivo: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class ParametroCreacionDto {
  @AutoMap()
  @IsString()
  tipo: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  orden: number;

  @AutoMap()
  @IsString()
  valor: string;

  @AutoMap()
  @IsString()
  texto: string;

  @AutoMap()
  @IsBoolean()
  estaActivo?: boolean;
}

export class ParametroModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  tipo?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  orden?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  valor?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  texto?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaActivo?: boolean;
}

import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class PuestoDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  descripcion: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  nivelJerarquico: number;

  @AutoMap()
  @IsBoolean()
  estaActivo: boolean;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  uniOrganizacionalId: number;

  @AutoMap()
  @IsString()
  uniOrganizacionalNombre: string;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class PuestoCreacionDto {
  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  descripcion: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  nivelJerarquico: number;

  @AutoMap()
  @IsBoolean()
  estaActivo: boolean;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  uniOrganizacionalId: number;
}

export class PuestoModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  descripcion?: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  nivelJerarquico?: number;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaActivo?: boolean;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalId?: number;
}

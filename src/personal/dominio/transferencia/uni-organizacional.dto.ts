import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UniOrganizacionalDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  codigo: string;

  @AutoMap()
  @IsString()
  sigla: string;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsBoolean()
  estaActiva: boolean;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalSuperiorId?: number;

  @AutoMap()
  @IsString()
  uniOrganizacionalSuperiorNombre: string;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  numPuestos: number;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class UniOrganizacionalCreacionDto {
  @AutoMap()
  @IsString()
  codigo: string;

  @AutoMap()
  @IsString()
  sigla: string;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsBoolean()
  estaActiva: boolean;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalSuperiorId?: number;
}

export class UniOrganizacionalModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  codigo?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  sigla?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaActiva?: boolean;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  uniOrganizacionalSuperiorId?: number;
}

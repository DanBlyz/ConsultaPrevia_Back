import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UsuarioDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  apellido: string;

  @AutoMap()
  @IsString()
  nomPublico: string;

  @AutoMap()
  @IsString()
  correoElectronico: string;

  @AutoMap()
  @IsString()
  codCuenta: string;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class UsuarioCreacionDto {
  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  apellido: string;

  @AutoMap()
  @IsString()
  nomPublico: string;

  @AutoMap()
  @IsString()
  correoElectronico: string;
}

export class UsuarioModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  apellido?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nomPublico?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  correoElectronico?: string;
}

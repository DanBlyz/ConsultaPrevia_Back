import { AutoMap } from '@automapper/classes';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { RolCuentaDto } from '.';

export class CuentaDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  codigo: string;

  @AutoMap()
  @IsString()
  modoAutenticacion: string;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  clave: string;

  // @AutoMap()
  // @IsString()
  // contrasenia: string;

  @AutoMap()
  @IsBoolean()
  estaAutorizada: boolean;

  @AutoMap()
  @IsDate()
  @IsOptional()
  instUltSesion?: Date;

  @AutoMap()
  @IsNumber()
  @IsPositive()
  numIntFallidos: number;

  @AutoMap()
  @IsBoolean()
  estaBloqueada: boolean;

  @AutoMap()
  @IsDate()
  @IsOptional()
  instUltBloqueo?: Date;

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

export class CuentaCreacionDto {
  @AutoMap()
  @IsString()
  codigo: string;

  @AutoMap()
  @IsString()
  modoAutenticacion: string;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  clave: string;

  @AutoMap()
  @IsString()
  contrasenia: string;
}

export class CuentaModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  modoAutenticacion?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaAutorizada?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  estaBloqueada?: boolean;
}

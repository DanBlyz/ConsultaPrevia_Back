import { AutoMap } from '@automapper/classes';
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { InfoLaboralDto, PuestoPersonaDto } from '.';

export class PersonaDto {
  @AutoMap()
  @IsNumber()
  @IsPositive()
  id: number;

  @AutoMap()
  @IsString()
  codigo: string;

  @AutoMap()
  @IsString()
  primApellido: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  segApellido?: string;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  numDocumento: string;

  @AutoMap()
  @IsString()
  expedicion: string;

  @AutoMap()
  @IsDate()
  fecNacimiento: Date;

  @AutoMap()
  @IsString()
  correoPersonal: string;

  @AutoMap()
  @IsString()
  celularPersonal: string;

  @AutoMap()
  @IsOptional()
  infoLaboral?: InfoLaboralDto;

  @AutoMap()
  @IsOptional()
  interinato?: PuestoPersonaDto;

  @AutoMap()
  @IsBoolean()
  tieneFotografia: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeModificar: boolean;

  @AutoMap()
  @IsBoolean()
  sePuedeEliminar: boolean;
}

export class PersonaCreacionDto {
  @AutoMap()
  @IsString()
  primApellido: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  segApellido?: string;

  @AutoMap()
  @IsString()
  nombre: string;

  @AutoMap()
  @IsString()
  numDocumento: string;

  @AutoMap()
  @IsString()
  expedicion: string;

  @AutoMap()
  @IsDate()
  fecNacimiento: Date;

  @AutoMap()
  @IsString()
  correoPersonal: string;

  @AutoMap()
  @IsString()
  celularPersonal: string;
}

export class PersonaModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  primApellido?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  @IsOptional()
  segApellido?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  nombre?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  numDocumento?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  expedicion?: string;

  @AutoMap()
  @IsDate()
  @IsOptional()
  fecNacimiento?: Date;

  @AutoMap()
  @IsString()
  @IsOptional()
  correoPersonal?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  celularPersonal?: string;
}

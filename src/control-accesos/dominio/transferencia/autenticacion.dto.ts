import { AutoMap } from '@automapper/classes';
import { IsArray, IsString } from 'class-validator';

export class AutenticacionDto {
  @AutoMap()
  @IsString()
  cuenta: string;

  @AutoMap()
  @IsString()
  contrasenia: string;

  // @AutoMap()
  // @IsString({ each: true })
  // @IsArray()
  // grupos: string[];

  @AutoMap()
  @IsString()
  ip: string;
}

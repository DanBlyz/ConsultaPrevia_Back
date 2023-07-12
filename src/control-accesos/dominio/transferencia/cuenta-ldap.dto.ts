import { AutoMap } from '@automapper/classes';
import { IsOptional, IsString } from 'class-validator';

export class CuentaLdapDto {
  @AutoMap()
  @IsString()
  uid: string;

  @AutoMap()
  @IsString()
  cn: string;

  @AutoMap()
  @IsString()
  givenName: string;

  @AutoMap()
  @IsString()
  sn: string;

  @AutoMap()
  @IsString()
  displayName: string;

  @AutoMap()
  @IsString()
  mail: string;

  @AutoMap()
  @IsString()
  title: string;
}

export class CuentaLdapCreacionDto {
  @AutoMap()
  @IsString()
  uid: string;

  @AutoMap()
  @IsString()
  cn: string;

  @AutoMap()
  @IsString()
  givenName: string;

  @AutoMap()
  @IsString()
  sn: string;

  @AutoMap()
  @IsString()
  displayName: string;

  @AutoMap()
  @IsString()
  mail: string;

  @AutoMap()
  @IsString()
  title: string;
}

export class CuentaLdapModificacionDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  uid?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  cn?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  givenName?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  sn?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  displayName?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  mail?: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  title?: string;
}

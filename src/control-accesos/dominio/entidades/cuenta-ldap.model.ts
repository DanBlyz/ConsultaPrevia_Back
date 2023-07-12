import { AutoMap } from '@automapper/classes';

export class CuentaLdap {
  @AutoMap()
  uid: string;

  @AutoMap()
  cn: string;

  @AutoMap()
  givenName: string;

  @AutoMap()
  sn: string;

  @AutoMap()
  displayName: string;

  @AutoMap()
  mail: string;

  @AutoMap()
  title: string;
}

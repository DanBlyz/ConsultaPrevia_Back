export class Identidad {
  private static instance: Identidad;
  public usuarioId: any;
  public cuenta: string;
  public roles: string[];

  public accessToken: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  public static getInstance(): Identidad {
    if (!Identidad.instance) {
      Identidad.instance = new Identidad();
    }
    return Identidad.instance;
  }
}

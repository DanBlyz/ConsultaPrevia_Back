import * as crypto from 'crypto';
import { Readable } from 'stream';

export class FuncionesHelper {
  static contiene(lista1: string[], lista2: string[]): boolean {
    return lista1.some((item) => {
      return lista2.includes(item);
    });
  }

  static obtenerSHA1(cadena: string) {
    return crypto.createHash('sha1').update(cadena).digest('hex');
  }

  static obtenerSHA1Aleatorio() {
    /*return crypto
      .createHash('sha1')
      .update(crypto.randomBytes(20).toString('hex'))
      .digest('hex');*/
    return crypto
      .createHash('sha1')
      .update(new Date().getTime().toString() + Math.random().toString())
      .digest('hex');
  }

  static obtenerCadenaAleatoria(base = 20) {
    return crypto.randomBytes(base).toString('hex');
  }

  static generarHexadecimal() {
    const instante = new Date();
    const codigo =
      instante.getFullYear() * 10000 +
      instante.getMonth() * 100 +
      instante.getDay() +
      (instante.getHours() * 60 * 60 +
        instante.getMinutes() * 60 +
        instante.getSeconds()) *
        1000 +
      instante.getMilliseconds();
    return codigo.toString(16).toUpperCase();
  }

  static obtenerStream(archivoBase64: string) {
    try {
      if (archivoBase64 !== '') {
        const buffer = Buffer.from(archivoBase64, 'base64');
        const stream = new Readable();
        stream.push(buffer);
        stream.push(null);
        return stream;
      } else {
        return null;
      }
    } catch (ex) {
      return null;
    }
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionesHelper = void 0;
const crypto = require("crypto");
const stream_1 = require("stream");
class FuncionesHelper {
    static contiene(lista1, lista2) {
        return lista1.some((item) => {
            return lista2.includes(item);
        });
    }
    static obtenerSHA1(cadena) {
        return crypto.createHash('sha1').update(cadena).digest('hex');
    }
    static obtenerSHA1Aleatorio() {
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
        const codigo = instante.getFullYear() * 10000 +
            instante.getMonth() * 100 +
            instante.getDay() +
            (instante.getHours() * 60 * 60 +
                instante.getMinutes() * 60 +
                instante.getSeconds()) *
                1000 +
            instante.getMilliseconds();
        return codigo.toString(16).toUpperCase();
    }
    static obtenerStream(archivoBase64) {
        try {
            if (archivoBase64 !== '') {
                const buffer = Buffer.from(archivoBase64, 'base64');
                const stream = new stream_1.Readable();
                stream.push(buffer);
                stream.push(null);
                return stream;
            }
            else {
                return null;
            }
        }
        catch (ex) {
            return null;
        }
    }
}
exports.FuncionesHelper = FuncionesHelper;
//# sourceMappingURL=funciones-helper.js.map
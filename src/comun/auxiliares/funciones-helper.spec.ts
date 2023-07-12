import { FuncionesHelper } from './funciones-helper';

describe('FuncionesHelper', () => {
  describe('contiene', () => {
    test('La lista1 contiene valores de la lista2', () => {
      const lista1 = ['1', '2', '3', '4', '5'];
      const lista2 = ['1', '2'];
      FuncionesHelper.contiene(lista1, lista2);
      expect(FuncionesHelper.contiene(lista1, lista2)).toBeTruthy();
    });
    test('La lista2 no contine valores de la lista2', () => {
      const lista1 = ['1', '2', '3', '4', '5'];
      const lista2 = ['8', '9'];
      FuncionesHelper.contiene(lista1, lista2);
      expect(FuncionesHelper.contiene(lista1, lista2)).not.toBeTruthy();
    });
  });
  describe('obtenerSHA1', () => {
    test('Generamos el SHA1 de una cadena', () => {
      expect(FuncionesHelper.obtenerSHA1('123456789')).toBe(
        'f7c3bc1d808e04732adf679965ccc34ca7ae3441',
      );
    });
  });
  describe('obtenerSHA1Aleatorio', () => {
    test('Generamos un SHA1 aleatorio', () => {
      expect(FuncionesHelper.obtenerSHA1Aleatorio().length).toBeGreaterThan(0);
    });
  });
  describe('obtenerCadenaAleatoria', () => {
    test('Generamos una cadena aleatoria', () => {
      expect(FuncionesHelper.obtenerCadenaAleatoria().length).toBe(40);
    });
    test('Generamos una cadena aleatoria de longitud 20', () => {
      expect(FuncionesHelper.obtenerCadenaAleatoria(10).length).toBe(20);
    });
  });
  describe('generarHexadecimal', () => {
    test('Generamos una cadena hexadecimal', () => {
      expect(FuncionesHelper.generarHexadecimal().length).toBeGreaterThan(0);
    });
  });
  describe('obtenerStream', () => {
    test('Devuelve nulo para una cadena vacia', () => {
      expect(FuncionesHelper.obtenerStream('')).toBeNull();
    });
    test('Devuelve nulo para un valor nulo', () => {
      expect(FuncionesHelper.obtenerStream(null)).toBeNull();
    });
    test('Devuelve el stream de un archivo en base64', () => {
      expect(FuncionesHelper.obtenerStream('QURTSUI=')).toBeDefined();
    });
  });
});

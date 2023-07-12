<p align="center">
  <a href="https://ajam.gob.bo/" target="blank"><img style="max-width: 300px;" src="https://ajam.gob.bo/portal_frontend/assets/img/logo-adsib.png" alt="AJAM" /></a>
</p>

# comun - Módulo para NestJS

Módulo de clases y funciones transversales para proyectos que utilizan el framework NestJS.

> Para mayor información sobre NestJS, visitar [https://nestjs.com](https://nestjs.com)

## Instalación

Desde la raíz del proyecto clonamos el proyecto desde el Repositorio Estatal de Software Libre.
```bash
$ cd src
$ git submodule add https://gitlab.softwarelibre.gob.bo/adsib/modulos-nestjs/comun.git comun
```

Instalamos los paquetes necesarios para el correcto funcionamiento del módulo.
```bash
$ npm install --save @nestjs/passport passport @nestjs/jwt passport-jwt
$ npm install --save-dev @types/passport-jwt
```
```bash
$ npm install --save passport-headerapikey
```

## Licencia

[LICENCIA PÚBLICA GENERAL](LICENSE.md)<br>
de Consideraciones y Registro de Software Libre en Bolivia<br>(LPG-Bolivia)

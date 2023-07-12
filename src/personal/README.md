<p align="center">
  <a href="https://ajam.gob.bo/" target="blank"><img style="max-width: 300px;" src="https://ajam.gob.bo/portal_frontend/assets/img/logo-ajam.png" alt="AJAM" /></a>
</p>

# personal - Módulo para NestJS

Módulo de gestión de personal (administración básica)

> Para mayor información sobre NestJS, visitar [https://nestjs.com](https://nestjs.com)

## Instalación

Desde la raíz del proyecto clonamos el proyecto desde el Repositorio Estatal de Software Libre.
```bash
$ cd src
$ git submodule add https://gitlab.softwarelibre.gob.bo/adsib/modulos-nestjs/personal.git personal
```

Instalamos los paquetes necesarios para el correcto funcionamiento del módulo.
```bash
$ npm install --save luxon
```

Ejecutamos las migraciones de la base de datos
```bash
$ npm run build
$ npx typeorm migration:run
```

Importamos **PersonalModule** en el **AppModule**

## Licencia

[LICENCIA PÚBLICA GENERAL](LICENSE.md)<br>
de Consideraciones y Registro de Software Libre en Bolivia<br>(LPG-Bolivia)

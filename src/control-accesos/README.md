<p align="center">
  <a href="https://ajam.gob.bo/" target="blank"><img style="max-width: 300px;" src="https://ajam.gob.bo/portal_frontend/assets/img/logo-ajam.png" alt="AJAM" /></a>
</p>

# control-accesos - Módulo para NestJS

Módulo de gestión y control de accesos de usuarios.

> Para mayor información sobre NestJS, visitar [https://nestjs.com](https://nestjs.com)

## Instalación

Desde la raíz del proyecto clonamos el proyecto desde el Repositorio Estatal de Software Libre.
```bash
$ cd src
$ git submodule add https://gitlab.softwarelibre.gob.bo/adsib/modulos-nestjs/control-accesos.git control-accesos
```

Instalamos los paquetes necesarios para el correcto funcionamiento del módulo.
```bash
$ npm install --save bcrypt ldapts passport-headerapikey
```

Ejecutamos las migraciones de la base de datos
```bash
$ npm run build
$ npx typeorm migration:run
```

Importamos **ControlAccesosModule** en el **AppModule**

## Licencia

[LICENCIA PÚBLICA GENERAL](LICENSE.md)<br>
de Consideraciones y Registro de Software Libre en Bolivia<br>(LPG-Bolivia)

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const bodyParser = require("body-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const configService = app.get(config_1.ConfigService);
    app.use(bodyParser.json({
        limit: configService.get('APP_LIMITE_TAMANIO_ARCHIVO'),
    }));
    app.use(bodyParser.urlencoded({
        limit: configService.get('APP_LIMITE_TAMANIO_ARCHIVO'),
        extended: true,
    }));
    app.enableCors();
    await app.listen(configService.get('APP_PUERTO'));
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map
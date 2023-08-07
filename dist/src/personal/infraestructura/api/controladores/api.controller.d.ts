import { ConfigService } from '@nestjs/config';
export declare class ApiController {
    private configService;
    constructor(configService: ConfigService);
    obtenerVersion(): Promise<any>;
}

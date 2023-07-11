import { ConfigService } from '@nestjs/config';
import Strategy from 'passport-headerapikey';
declare const ApiKeyStrategy_base: new (...args: any[]) => Strategy;
export declare class ApiKeyStrategy extends ApiKeyStrategy_base {
    private configService;
    constructor(configService: ConfigService);
}
export {};

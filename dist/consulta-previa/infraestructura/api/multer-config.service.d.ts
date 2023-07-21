import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express';
export declare class MulterConfigService implements MulterOptionsFactory {
    createMulterOptions(): MulterModuleOptions;
}

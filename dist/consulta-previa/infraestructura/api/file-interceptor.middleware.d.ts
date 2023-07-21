import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MulterOptionsFactory, MulterModuleOptions } from '@nestjs/platform-express';
export declare class FileInterceptor implements NestInterceptor {
    private readonly upload;
    constructor(upload: any);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
export declare class FileInterceptorMiddleware {
    private readonly upload;
    constructor();
    resolve(): any;
}
export declare class MulterConfigService implements MulterOptionsFactory {
    createMulterOptions(): MulterModuleOptions;
}

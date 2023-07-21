"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterConfigService = exports.FileInterceptorMiddleware = exports.FileInterceptor = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const multer_2 = require("multer");
let FileInterceptor = class FileInterceptor {
    constructor(upload) {
        this.upload = upload;
    }
    intercept(context, next) {
        return next.handle();
    }
};
FileInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], FileInterceptor);
exports.FileInterceptor = FileInterceptor;
let FileInterceptorMiddleware = class FileInterceptorMiddleware {
    constructor() {
        this.upload = (0, multer_1.default)({ dest: './uploads' });
    }
    resolve() {
        return this.upload.single('file');
    }
};
FileInterceptorMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FileInterceptorMiddleware);
exports.FileInterceptorMiddleware = FileInterceptorMiddleware;
let MulterConfigService = class MulterConfigService {
    createMulterOptions() {
        return {
            storage: (0, multer_2.diskStorage)({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    cb(null, file.fieldname + '-' + uniqueSuffix);
                },
            }),
        };
    }
};
MulterConfigService = __decorate([
    (0, common_1.Injectable)()
], MulterConfigService);
exports.MulterConfigService = MulterConfigService;
//# sourceMappingURL=file-interceptor.middleware.js.map
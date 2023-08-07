"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const parametro_service_1 = require("./parametro.service");
describe('ParametroService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [parametro_service_1.ParametroService],
        }).compile();
        service = module.get(parametro_service_1.ParametroService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=parametro.service.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const puesto_service_1 = require("./puesto.service");
describe('PuestoService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [puesto_service_1.PuestoService],
        }).compile();
        service = module.get(puesto_service_1.PuestoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=puesto.service.spec.js.map
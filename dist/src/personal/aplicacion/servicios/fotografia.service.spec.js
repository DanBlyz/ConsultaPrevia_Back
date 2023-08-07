"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const fotografia_service_1 = require("./fotografia.service");
describe('FotografiaService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [fotografia_service_1.FotografiaService],
        }).compile();
        service = module.get(fotografia_service_1.FotografiaService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=fotografia.service.spec.js.map
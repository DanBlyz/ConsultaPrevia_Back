"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const grupo_service_1 = require("./grupo.service");
describe('GrupoService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [grupo_service_1.GrupoService],
        }).compile();
        service = module.get(grupo_service_1.GrupoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=grupo.service.spec%20copy.js.map
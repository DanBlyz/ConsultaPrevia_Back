"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const uni_organizacional_service_1 = require("./uni-organizacional.service");
describe('UniOrganizacionalService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [uni_organizacional_service_1.UniOrganizacionalService],
        }).compile();
        service = module.get(uni_organizacional_service_1.UniOrganizacionalService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=uni-organizacional.service.spec.js.map
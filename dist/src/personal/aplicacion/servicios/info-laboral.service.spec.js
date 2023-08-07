"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const info_laboral_service_1 = require("./info-laboral.service");
describe('InfoLaboralService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [info_laboral_service_1.InfoLaboralService],
        }).compile();
        service = module.get(info_laboral_service_1.InfoLaboralService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=info-laboral.service.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const puesto_persona_service_1 = require("./puesto-persona.service");
describe('PuestoPersonaService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [puesto_persona_service_1.PuestoPersonaService],
        }).compile();
        service = module.get(puesto_persona_service_1.PuestoPersonaService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=puesto-persona.service.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const puesto_controller_1 = require("./puesto.controller");
describe('PuestoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [puesto_controller_1.PuestoController],
        }).compile();
        controller = module.get(puesto_controller_1.PuestoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=puesto.controller.spec.js.map
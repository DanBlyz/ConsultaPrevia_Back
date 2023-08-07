"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const parametro_controller_1 = require("./parametro.controller");
describe('ParametroController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [parametro_controller_1.ParametroController],
        }).compile();
        controller = module.get(parametro_controller_1.ParametroController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=parametro.controller.spec.js.map
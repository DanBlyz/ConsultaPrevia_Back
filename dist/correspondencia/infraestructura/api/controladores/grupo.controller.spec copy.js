"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const grupo_controller_1 = require("./grupo.controller");
describe('GrupoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [grupo_controller_1.GrupoController],
        }).compile();
        controller = module.get(grupo_controller_1.GrupoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=grupo.controller.spec%20copy.js.map
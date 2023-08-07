"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const uni_organizacional_controller_1 = require("./uni-organizacional.controller");
describe('UniOrganizacionalController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [uni_organizacional_controller_1.UniOrganizacionalController],
        }).compile();
        controller = module.get(uni_organizacional_controller_1.UniOrganizacionalController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=uni-organizacional.controller.spec.js.map
import { Test, TestingModule } from '@nestjs/testing';
import { ParametroController } from './parametro.controller';

describe('ParametroController', () => {
  let controller: ParametroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParametroController],
    }).compile();

    controller = module.get<ParametroController>(ParametroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

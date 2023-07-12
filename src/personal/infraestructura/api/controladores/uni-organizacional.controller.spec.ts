import { Test, TestingModule } from '@nestjs/testing';
import { UniOrganizacionalController } from './uni-organizacional.controller';

describe('UniOrganizacionalController', () => {
  let controller: UniOrganizacionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniOrganizacionalController],
    }).compile();

    controller = module.get<UniOrganizacionalController>(
      UniOrganizacionalController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

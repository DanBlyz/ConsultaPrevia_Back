import { Test, TestingModule } from '@nestjs/testing';
import { UniOrganizacionalService } from './uni-organizacional.service';

describe('UniOrganizacionalService', () => {
  let service: UniOrganizacionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniOrganizacionalService],
    }).compile();

    service = module.get<UniOrganizacionalService>(UniOrganizacionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

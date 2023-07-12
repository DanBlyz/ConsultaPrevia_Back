import { Test, TestingModule } from '@nestjs/testing';
import { InfoLaboralService } from './info-laboral.service';

describe('InfoLaboralService', () => {
  let service: InfoLaboralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoLaboralService],
    }).compile();

    service = module.get<InfoLaboralService>(InfoLaboralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

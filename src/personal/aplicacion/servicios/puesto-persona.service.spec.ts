import { Test, TestingModule } from '@nestjs/testing';
import { PuestoPersonaService } from './puesto-persona.service';

describe('PuestoPersonaService', () => {
  let service: PuestoPersonaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuestoPersonaService],
    }).compile();

    service = module.get<PuestoPersonaService>(PuestoPersonaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

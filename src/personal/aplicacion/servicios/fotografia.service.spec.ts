import { Test, TestingModule } from '@nestjs/testing';
import { FotografiaService } from './fotografia.service';

describe('FotografiaService', () => {
  let service: FotografiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FotografiaService],
    }).compile();

    service = module.get<FotografiaService>(FotografiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

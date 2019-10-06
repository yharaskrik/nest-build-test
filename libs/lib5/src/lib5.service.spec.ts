import { Test, TestingModule } from '@nestjs/testing';
import { Lib5Service } from './lib5.service';

describe('Lib5Service', () => {
  let service: Lib5Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lib5Service],
    }).compile();

    service = module.get<Lib5Service>(Lib5Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

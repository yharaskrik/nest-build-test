import { Test, TestingModule } from '@nestjs/testing';
import { Lib6Service } from './lib6.service';

describe('Lib6Service', () => {
  let service: Lib6Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lib6Service],
    }).compile();

    service = module.get<Lib6Service>(Lib6Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

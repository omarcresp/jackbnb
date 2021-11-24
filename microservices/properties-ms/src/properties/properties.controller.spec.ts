import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { Property } from './entities/property.entity';

describe('PropertiesController', () => {
  let controller: PropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropertiesController],
      providers: [
        PropertiesService,
        {
          provide: getModelToken(Property.name),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PropertiesController>(PropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

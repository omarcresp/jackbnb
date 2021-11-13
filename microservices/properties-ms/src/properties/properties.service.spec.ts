import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PropertiesService } from './properties.service';
import { Property, PropertyDocument } from './entities/property.entity';

const mockData = (
  page = 1,
  totalItems = 10352,
  totalPages = Math.ceil(totalItems / 10),
  hasNextPage = page < totalPages ? true : false,
  items = hasNextPage ? [{}, {}] : [],
) => [{ items, page, hasNextPage, totalItems, totalPages }];

describe('PropertiesService', () => {
  let service: PropertiesService;
  let model: Model<PropertyDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PropertiesService,
        {
          provide: getModelToken(Property.name),
          useValue: {
            aggregate: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PropertiesService>(PropertiesService);
    model = module.get<Model<PropertyDocument>>(getModelToken(Property.name));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findPerPage', () => {
    it('should throw NotFoundException error when a NaN is provided', async () => {
      await expect(service.findPerPage(Number('asdbf'))).rejects.toThrowError(
        NotFoundException,
      );
    });

    it('should throw NotFoundException error when a page lower than 1 is provided', async () => {
      await expect(service.findPerPage(0)).rejects.toThrowError(
        NotFoundException,
      );

      await expect(service.findPerPage(-1)).rejects.toThrowError(
        NotFoundException,
      );
    });

    it('should equals "true" at the "hasNextPage" field when the first page is requested', async () => {
      jest.spyOn(model, 'aggregate').mockReturnValue({
        exec: jest.fn().mockResolvedValueOnce(mockData()),
      } as any);

      const findData = await service.findPerPage(1);
      expect(findData['hasNextPage']).toBe(true);
    });

    it('should equals "false" at the "hasNextPage" field when the last page or a higher number than that is requested', async () => {
      for (let i = 1036; i < 1037; i++) {
        jest.spyOn(model, 'aggregate').mockReturnValue({
          exec: jest.fn().mockResolvedValueOnce(mockData(i)),
        } as any);

        const findData = await service.findPerPage(i);
        expect(findData['hasNextPage']).toBe(false);
      }
    });

    it('should return an empty "items" array if a page number higher than "totalPages" is requested', async () => {
      for (let i = 1036, test = true; i < 1037; i++, test = false) {
        jest.spyOn(model, 'aggregate').mockReturnValue({
          exec: jest.fn().mockResolvedValueOnce(mockData()),
        } as any);

        const findData = await service.findPerPage(i);
        expect(findData['items'].length >= 1).toBe(test);
      }
    });
  });
});

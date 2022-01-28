import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import paginationPipeline from '@wermote/paginate';

import { Model } from 'mongoose';

import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property, PropertyDocument } from './entities/property.entity';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name) private PropertyModel: Model<PropertyDocument>,
  ) {}

  create(createPropertyDto: CreatePropertyDto) {
    return 'This action adds a new property';
  }

  async findPerPage(page: number): Promise<PropertyDocument[]> {
    if (page < 1 || isNaN(page)) {
      throw new NotFoundException();
    }

    const results = await this.PropertyModel.aggregate<PropertyDocument[]>(
      paginationPipeline(page),
    ).exec();

    return results[0];
  }

  findOne(id: string) {
    return `This action returns a #${id} property`;
  }

  update(id: string, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: string) {
    return `This action removes a #${id} property`;
  }
}

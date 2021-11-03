import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

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

  async findAll(): Promise<PropertyDocument[]> {
    const paginatedResults = await this.PropertyModel.aggregate(
      this.PropertyModel.schema.methods.paginate(),
    );

    if (paginatedResults[0]['page'] <= -1) {
      throw new NotFoundException();
    }

    return paginatedResults;
  }

  async findPerPage(id: number): Promise<PropertyDocument[]> {
    const paginatedResults = await this.PropertyModel.aggregate(
      this.PropertyModel.schema.methods.paginate(id, 10),
    );

    if (paginatedResults[0]['page'] <= -1) {
      throw new NotFoundException();
    }

    return paginatedResults;
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}

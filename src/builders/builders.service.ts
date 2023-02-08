import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Builders, BuilderDocument } from './schemas/builders.schema';
import { CreateBuilderDto } from './dto/create-builder.dto';

@Injectable()
export class BuildersService {
  constructor(@InjectModel(Builders.name) private builderModel: Model<BuilderDocument>) {}

  async create(createBuilderDto: CreateBuilderDto): Promise<Builders> {
    const createdCompany = new this.builderModel(createBuilderDto);
    return createdCompany.save();
  }

  async findAll(): Promise<Builders[]> {
    return this.builderModel.find().populate('company_id')
  }

 async getByIdBuilder(id): Promise<Builders> {
    return  this.builderModel.findById({_id: id}).populate("company_id");
 }

 async updateByIdBuilder(id, body): Promise<Builders>{
    return this.builderModel.findByIdAndUpdate(id, body, {new: true});
 }

 async deleteBuilder(id){
  return this.builderModel.findByIdAndRemove(id);
}
}


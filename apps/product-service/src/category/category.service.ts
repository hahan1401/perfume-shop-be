import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './chemas/category.schema';
import { ResponseDTO } from '../DTO/response';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async getAll(): Promise<ResponseDTO<Category[]>> {
    // await this.categoryModel.insertMany(CATEGORIES_DUMMY);
    const categories = await this.categoryModel.find();
    return new ResponseDTO<Category[]>(categories);
  }

  async getById(id: string): Promise<ResponseDTO<Category | null>> {
    // await this.categoryModel.insertMany(CATEGORIES_DUMMY);
    const category = await this.categoryModel.findById(id).exec();
    return new ResponseDTO<Category | null>(category);
  }
}

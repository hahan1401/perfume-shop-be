import { Controller, Get, Inject } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './chemas/category.schema';
import { ResponseDTO } from '../DTO/response';

@Controller('category')
export class CategoryController {
  @Inject()
  private readonly categoryService: CategoryService;

  @Get('/')
  async getAll(): Promise<ResponseDTO<Category[]>> {
    return this.categoryService.getAll();
  }
}

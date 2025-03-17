import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PerfumesService } from './perfume.service';
import { Perfume } from './schemas/perfume.schema';
import { Pagination } from '../common/Pagination';
import { PaginationParseIntPipe } from '../pipes/CustomParseInPipe.pipe';

@Controller('perfumes')
export class PerfumesController {
  constructor(private readonly perfumeService: PerfumesService) {}

  @Get('/')
  async getAll(
    @Query(PaginationParseIntPipe) pagination?: Pagination,
    @Query('categoryId')
    categoryId?: string,
  ) {
    return this.perfumeService.getAll({
      categoryId,
      pagination: pagination,
    });
  }

  @Post('/')
  async create(@Body() perfume: Perfume) {
    return this.perfumeService.create(perfume);
  }

  // @Put()
  // async update(@Body() perfume: CreatePerfumeDto) {
  //   return this.perfumeService.update(perfume);
  // }

  @Delete(':id')
  async softDelete(@Param('id') id: string) {
    return this.perfumeService.softDelete(id);
  }
}

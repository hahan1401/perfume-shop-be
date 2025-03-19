import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PerfumesService } from './perfume.service';
import { Perfume } from './schemas/perfume.schema';
import { Pagination } from '@shared/common/Pagination';
import { PaginationParseIntPipe } from '@shared/pipes/PaginationParseIntPipe.pipe';
import { MessagePattern } from '@nestjs/microservices';

@Controller('perfumes')
export class PerfumesController {
  constructor(private readonly perfumeService: PerfumesService) {}

  @MessagePattern('productService.perfumes.getAll')
  async getAll({
    pagination,
    categoryId,
  }: {
    categoryId?: string;
    pagination?: Pagination;
  }) {
    return this.perfumeService.getAll({
      categoryId,
      pagination: pagination,
    });
  }

  @MessagePattern('productService.perfumes.create')
  async create({ perfume }: { perfume: Perfume }) {
    return this.perfumeService.create(perfume);
  }

  @MessagePattern('productService.perfumes.update')
  async update({id, perfume}: {id: string, perfume: Perfume}) {
    return this.perfumeService.update(id, perfume);
  }

  @MessagePattern('productService.perfumes.delete')
  async softDelete({ids}: {ids: string[]}) {
    return this.perfumeService.softDelete(ids);
  }
}

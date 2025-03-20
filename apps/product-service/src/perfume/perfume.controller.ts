import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Pagination } from '@shared/common/Pagination';
import { messagePattern } from '@shared/network';
import { PerfumesService } from './perfume.service';
import { Perfume } from './schemas/perfume.schema';

@Controller('perfumes')
export class PerfumesController {
  constructor(private readonly perfumeService: PerfumesService) {}

  @MessagePattern(messagePattern.productService.perfimes.getAll)
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

  @MessagePattern(messagePattern.productService.perfimes.create)
  async create({ perfume }: { perfume: Perfume }) {
    return this.perfumeService.create(perfume);
  }

  @MessagePattern(messagePattern.productService.perfimes.update)
  async update({ id, perfume }: { id: string; perfume: Perfume }) {
    return this.perfumeService.update(id, perfume);
  }

  @MessagePattern(messagePattern.productService.perfimes.delete)
  async softDelete({ ids }: { ids: string[] }) {
    return this.perfumeService.softDelete(ids);
  }
}

import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Pagination } from '@shared/common/Pagination';
import { PaginationParseIntPipe } from '@shared/pipes/PaginationParseIntPipe.pipe';
import { Perfume } from 'apps/product-service/src/perfume/schemas/perfume.schema';

@Controller('product')
export class ProductGatewayController {
  constructor(@Inject('PRODUCT_SERVICE') private productClient: ClientProxy) {}

  @Get()
  async getAll(
    @Query(PaginationParseIntPipe) pagination?: Pagination,
    @Query('categoryId')
    categoryId?: string,
  ): Promise<any> {
    return this.productClient.send('productService.perfumes.getAll', {
      pagination,
      categoryId,
    });
  }

  @Post('/')
  async create(@Body() perfume: Perfume) {
    return this.productClient.send('productService.perfumes.create', {
      perfume,
    });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() perfume: Perfume) {
    return this.productClient.send('productService.perfumes.update', {
      id,
      perfume,
    });
  }

  @Post('/delete')
  async softDelete(@Body('ids') ids: string[]) {
    return this.productClient.send('productService.perfumes.delete', {
      ids,
    });
  }
}

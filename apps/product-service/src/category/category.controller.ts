import { Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  MessagePattern,
  Transport,
} from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CategoryService } from './category.service';
import { Category } from './chemas/category.schema';
import { ResponseDTO } from '@shared/DTO/response';

@Controller('category')
export class CategoryController {
  // private client: ClientProxy;

  @Inject()
  private readonly categoryService: CategoryService;

  // constructor() {
  //   this.client = ClientProxyFactory.create({
  //     transport: Transport.TCP,
  //     options: {
  //       port: 4002,
  //     },
  //   });
  // }

  @MessagePattern('productService.category.getAll')
  async getAll(): Promise<ResponseDTO<Category[]>> {
    // const a = await this.client.send('asd', {}).forEach((value) => {
    //   console.log('value', value);
    // });
    // console.log('a', a);
    // const s = await lastValueFrom(this.client.send('asd', {}));
    // console.log('s', s);
    return this.categoryService.getAll();
  }
}

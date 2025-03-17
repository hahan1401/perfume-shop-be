import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PerfumesController } from './perfume.controller';
import { PerfumesService } from './perfume.service';
import { Perfume, PerfumeSchema } from './schemas/perfume.schema';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Perfume.name, schema: PerfumeSchema }]),
    CategoryModule,
  ],
  controllers: [PerfumesController],
  providers: [PerfumesService],
  exports: [PerfumesService],
})
export class PerfumesModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderStatusController } from './order-status.controller';
import { OrderStatusService } from './order-status.service';
import { OrderStatus, OrderStatusSchema } from './schemas/OrderStatus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderStatus.name, schema: OrderStatusSchema },
    ]),
  ],
  controllers: [OrderStatusController],
  providers: [OrderStatusService],
})
export class OrderStatusModule {}

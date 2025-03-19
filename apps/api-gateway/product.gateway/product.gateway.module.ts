import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProductGatewayController } from './product.gateway.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.TCP,
        options: { port: 4001 },
      },
    ]),
  ],
  providers: [],
  controllers: [ProductGatewayController],
})
export class ProductGatewayModule {}

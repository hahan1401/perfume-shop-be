import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_NAMES } from '@shared/network';
import { ProductGatewayController } from './product.gateway.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICE_NAMES.PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: { port: 4001 },
      },
    ]),
  ],
  providers: [],
  controllers: [ProductGatewayController],
})
export class ProductGatewayModule {}

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MICROSERVICE_NAMES } from '@shared/network';
import { ProductGatewayModule } from '../product-service/product.gateway/product.gateway.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MICROSERVICE_NAMES.PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: { port: 4001 },
      },
    ]),
    ProductGatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { OmitType } from '@nestjs/mapped-types';
import { IPrices } from 'src/types/common';
import { Order } from '../schemas/order.schema';

export class OrderCreateDto extends OmitType(Order, ['perfumeId', 'customerId']) {
  customerName: string;
  contactNumber: string;
  perfumeId: string;
  price: IPrices;
  quantity: number;
}

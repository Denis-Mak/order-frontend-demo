import { Order } from '../order';

export class OrderMocks {
  public static readonly ORDERS: Order[] = [
    {
      id: 1,
      product: 'pen',
      customer: 'Kooli OÜ'
    },
    {
      id: 2,
      product: 'ruler',
      customer: 'Kooli OÜ'
    }
  ]
}

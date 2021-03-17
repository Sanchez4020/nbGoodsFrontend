import {Product} from "./product.model";
import { Seller } from "./seller.model";

export class User {
  id: number;
  seller?: Seller;
  firstName: string;
  secondName: string;
  email: string;
  gender: UserGender;
  deliveryAddress?: Array<DeliveryAddress>;
  orderHistory?: Array<OrderHistory>;
  itemsInCart?: Array<Product>;
  sizes?: Sizes;
}

export type UserGender = 'male' | 'female' | null;

export interface DeliveryAddress {
  main: string;
  apartment: string;
  city: string;
  country: string;
  index: number;
  fias: string;
}

export interface OrderHistory {
  orderId: number;
  number: string;
  date: Array<Date>;
  products: Array<Product>;
  status: number;
  coast: number;
}

export interface Sizes {
  value: any;
}

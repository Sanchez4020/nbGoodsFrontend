import {Product} from "./product.model";

export class User {
  id: number;
  seller?: Seller;
  firstName: string;
  secondName: string;
  email: string;
  gender?: UserGender;
  deliveryAddress?: Array<DeliveryAddress>;
  orderHistory?: Array<OrderHistory>;
  itemsInCart?: Array<Product>;
}

export interface Seller {
  sellerId: number;
}

export type UserGender = 'male' | 'female' | 'secret';

export interface DeliveryAddress {
  main: string;
  apartment: string;
  city: string;
  country: string;
  index: number;
}

export interface OrderHistory {
  number: string;
  date: string;
  products: Array<Product>;
  status: string;
  price: number;
}

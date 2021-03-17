import { Seller } from "./seller.model";
import { Brand } from "./brand.model";

export class Product {
  productId: number;
  article: string;
  brand: Brand;
  seller?: Seller;
  category: Category; // доработать
  size: Array<string>; // доработать
  type: Array<string>;
  color: Array<string>;
  condition: string;
  photos: Array<string>;
  cost: Prices;
  about?: Description;
  gender: ProductGender;
  likes: number;
  comments: Array<Comment>;
  userStatus: UserStatus;
  weight: number;
}

export interface Prices {
  price: number;
  promoPrice?: number;
  discount?: number;
}

export interface Description {
  points?: Array<string>;
  description?: string;
}

export type ProductGender = 'male' | 'female' | 'unisex' | 'boy' | 'girl' | 'childUniSex';

export interface Comment {
  userId: number;
  text: string;
}

export class UserStatus {
  liked: boolean;
  viewed: boolean;
  inCart: boolean;
}

export interface Category {
  id: number;
  desc: string;
  sizeTypes: Array<any>; // надо проработать получше
  logoMin: string;
  logoMax: string;
  parents: string;
  child: string;
  // надо доработать сущность
}

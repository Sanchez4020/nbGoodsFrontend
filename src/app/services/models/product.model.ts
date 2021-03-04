export class Product {
  productId: number;
  brand: string;
  sellerId?: number;
  categoryId: number;
  size: string;
  type: Array<string>;
  color: string;
  condition: string;
  photos: Array<string>;
  cost: Prices;
  about?: Description;
  gender: ProductGender;
  likes: number;
  comments: Array<Comment>;
  userStatus: UserStatus;
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

export type ProductGender = 'male' | 'female' | 'boy' | 'girl' | 'unisex';

export interface Comment {
  userId: number;
  text: string;
}

export class UserStatus {
  liked: boolean;
  viewed: boolean;
  inCart: boolean;
}

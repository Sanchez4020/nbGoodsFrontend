import {Component, Input} from '@angular/core';
import { Product } from "../../services/models/product.model";

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItem {
  @Input() productItem: Product;
}

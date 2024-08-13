import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService , private cartServive : CartService) {}

  ngOnInit(): void {}

  getAllProduct() {
    return this.productsService.getAllProduct();
  }
  addToCart(p_id:number){
    this.cartServive.add(p_id);
  }
}

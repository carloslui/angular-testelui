import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService,
    private router: Router
    ) { }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

  addToCart(product) {
    
    window.alert(product.obs + ' adicionado no carrinho!' );    
    this.cartService.addToCart(product);
    this.router.navigate(['']);
  }

}
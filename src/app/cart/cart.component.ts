import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  WhatsApp(){
    return new Promise(resolve => {
      console.log("Before API")
      this.http.get("https://api.whatsapp.com/send?phone=121234567891&text=I'm%20interested%20in%20your%20car%20for%20sale").map(response => response.json()).subscribe(data => {
        resolve(data);
        console.log("After API",data)
      }, err => {
      });
    });
  }

}
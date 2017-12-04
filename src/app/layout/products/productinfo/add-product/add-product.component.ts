import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product;

  constructor(private http: HttpClient) {
    this.product = new Product();
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log(JSON.stringify(this.product));
    this.http.post('http://localhost:8080/shopcenterms/product/add', this.product)
      .subscribe((response) => {
        alert(response);
    });
  }

  onReset() {
    this.product = new Product();
  }

}

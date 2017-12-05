import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { MatSnackBar} from '@angular/material';
import { SnackBarComponent } from '../../../../shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private snackBar: MatSnackBar) {
    this.product = new Product();
  }

  ngOnInit() {

  }

  onSubmit() {
    this.productService.addProduct(this.product)
      .subscribe((response) => {
        this.snackBar.open('新增成功', 'Done', {
          duration: 2000,
          verticalPosition: 'bottom'
        });
    });
  }

  onReset() {
    this.product = new Product();
  }

}

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-productlabel',
  templateUrl: './productlabel.component.html',
  styleUrls: ['./productlabel.component.scss']
})
export class ProductlabelComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  startDate = new Date();
  productList: Product[];
  procutCriteria: Product = new Product();
  skuCtrl: FormControl;
  produceDateCtrl = new FormControl();

  constructor(private _formBuilder: FormBuilder, private productService: ProductService) {

    this.skuCtrl = new FormControl();
    this.skuCtrl.valueChanges.subscribe(
      state => {
        this.filterStates(state);
      }
    );
   }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

  listProduct() {
    this.productService.getProduct(this.procutCriteria).subscribe((response) => {
      this.productList = JSON.parse(JSON.stringify(response)).data;
     });
  }


  filterStates(sku: string) {
    this.procutCriteria.sku = sku;
    this.productService.getProduct(this.procutCriteria).subscribe((response) => {
      this.productList = JSON.parse(JSON.stringify(response)).data;
     });
  }

  onSkuSelected(param) {
    this.productService.getProduct(this.procutCriteria).subscribe((response) => {
      this.productList = JSON.parse(JSON.stringify(response)).data;
      if (this.productList && this.productList.length > 0) {
        this.procutCriteria = this.productList[0];
      }
     });
  }


}

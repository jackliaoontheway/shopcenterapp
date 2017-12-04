import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-productlabel',
  templateUrl: './productlabel.component.html',
  styleUrls: ['./productlabel.component.scss']
})
export class ProductlabelComponent implements OnInit {

  length = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  pageEvent: PageEvent;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  onChange(param) {
    this.pageEvent = param;
    console.log(param);
  }

  search() {
    console.log('search something');
  }
  
  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-wraper',
  templateUrl: './product-wraper.component.html',
  styleUrls: ['./product-wraper.component.scss']
})
export class ProductWraperComponent implements OnInit {
  @Input('products') products:any;


  constructor() { }

  ngOnInit(): void {
  }

}

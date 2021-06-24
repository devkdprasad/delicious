import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-mutton',
  templateUrl: './mutton.component.html',
  styleUrls: ['./mutton.component.scss']
})
export class MuttonComponent implements OnInit {
  muttonArray:any
//   muttonArray=[{
//     imageLink:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_15tkn4fv0ah/2/prod_display_image/1619618870.6661--2021-04-2819:37:50--738",
//     productName:"Lumb tail-Hind Meat",
//     description:"fresh meety cuts of Lumb Tail",
//     price:500,
//     count:0
//   },
//   {
//   imageLink:"https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/a70e5917-863c-a74b-964c-c042fdd09db6/original/1574108576.6795--2019-11-1901_52_56--260.jpeg",
//    productName:"Goat Ribs and Chops",
//   description:"Perfectly cut, mix of 8-9 tender goat ribs juicy chops",
//   price:450,
//   count:0
// }
// ]

  constructor(private mutton:CartService ) { }

  ngOnInit(): void {
     this.mutton.getMuttonProducts().subscribe((data)=>{
    this.muttonArray=data;
})
  }

}

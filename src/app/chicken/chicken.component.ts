import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.scss']
})

export class ChickenComponent implements OnInit {
  chickenArray:any;


//   chickenArray=[{
//     imageLink:"https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_9fpkmbudlyi/2/prod_display_image/1616492902.3219--2021-03-2315:18:22--738",
//     productName:"Smoky Turmeric Country Chicken - Curry Cut With Skin",
//     description:"Smoked Country Chicken (Nati Koli) marinated in turmeric",
//     price:250,
//     count:0
    
//   },
//   {
//   imageLink:"/assets/download.jpg",
//   productName:"Chicken Thigh",
//   description:"Smoked Country Chicken (Nati Koli) marinated in turmeric",
//   price:270,
//   count:0
// }
// ]

  constructor(private chicken:CartService) { }

  ngOnInit(): void { 
    this.chicken.getChickenProducts().subscribe((data)=>{
      this.chickenArray=data;
  })
  }
}

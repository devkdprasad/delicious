import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basics';
  public currentItem="knowing about child to parent comunication";
items=['apple', 'mango', 'orange', 'banana'];
addItem(newItem:string){
  this.items.push(newItem);

}
 
  
}

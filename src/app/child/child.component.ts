import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() item="";

    @Output() newItemEvent=new EventEmitter<string>();
    addNewItem(value:string){
      this.newItemEvent.emit(value)
    }
}

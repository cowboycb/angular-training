import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem;
  @Output() deletex = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log("mw ", this.mediaItem);
  }


  deleteItem(){
    console.log("DELETED ---------");
    this.deletex.emit(this.mediaItem);
  }

}

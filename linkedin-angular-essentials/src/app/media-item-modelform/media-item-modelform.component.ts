import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-media-item-modelform',
  templateUrl: './media-item-modelform.component.html',
  styleUrls: ['./media-item-modelform.component.css']
})
export class MediaItemModelformComponent implements OnInit {

  mediaItemForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.mediaItemForm = new FormGroup({
      medium: new FormControl('movies'),
      name: new FormControl(''),
      date: new FormControl('')
    });
  }

  onSubmit(mediaItem){
    console.log(mediaItem);
  }


}

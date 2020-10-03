import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-modelform',
  templateUrl: './media-item-modelform.component.html',
  styleUrls: ['./media-item-modelform.component.css']
})
export class MediaItemModelformComponent implements OnInit {

  mediaItemForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.mediaItemForm = new FormGroup({
      medium: new FormControl('movies'),
      name: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern(/^[a-z0-9]+$/i)
      ])),
      date: new FormControl('', this.dateValidator)
    });
  }

  dateValidator(date: FormControl){
    if (date.value.trim().length === 0) return null;
    let year = parseInt(date.value);
    if (year>=1900 && year<=2100 ) return null;

    return {
      year: {min: 1900, max: 2100 }
    };
  }

  onSubmit(mediaItem){
    console.log(mediaItem);
  }


}

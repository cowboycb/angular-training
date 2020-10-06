import { MediaItemService } from './../services/media-item.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { lookupListToken } from '../providers';

@Component({
  selector: 'mw-media-item-modelform',
  templateUrl: './media-item-modelform.component.html',
  styleUrls: ['./media-item-modelform.component.css']
})
export class MediaItemModelformComponent implements OnInit {

  mediaItemForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    // @Inject("lookupListToken") public lookupList) { }
    @Inject(lookupListToken) public lookupList) { }

  ngOnInit(): void {
    this.mediaItemForm = this.formBuilder.group({
      medium: this.formBuilder.control('movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required, Validators.pattern(/^[a-z0-9]+$/i)
      ])),
      date: this.formBuilder.control('', this.dateValidator)
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
    console.log("Inserting ", mediaItem);
    this.mediaItemService.add(mediaItem);
  }


}

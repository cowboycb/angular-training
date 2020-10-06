import { MediaItemService } from './../services/media-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems;

  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit(): void {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem){
    console.log("deleting", mediaItem);
    this.mediaItemService.delete(mediaItem);
  }

}

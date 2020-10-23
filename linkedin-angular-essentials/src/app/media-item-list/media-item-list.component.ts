import { MediaItemService } from './../services/media-item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems;
  medium: string = "";

  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit(): void {
    this.getMediaItems(this.medium);
  }

  onMediaItemDelete(mediaItem) {
    console.log("deleting", mediaItem);
    this.mediaItemService.delete(mediaItem);
  }

  getMediaItems(medium: string) {
    // this.mediaItems = this.mediaItemService.get();
    this.medium = medium;
    this.mediaItemService.get(this.medium).subscribe(mediaItems => {
        this.mediaItems = mediaItems;
    });
  }

}

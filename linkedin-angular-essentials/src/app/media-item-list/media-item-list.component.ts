import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  mediaItems = [
    {
      id: 1,
      name: "First Media Item",
      date: "2020-05-13",
      medium: "Movies",
      // watchedOn: 112233
      watchedOn: null,
      isFavorite: true
    },
    {
      id: 2,
      name: "Second Media Item",
      date: "2020-06-14",
      medium: "Movies",
      watchedOn: 112233,
      isFavorite: true
    },
    {
      id: 3,
      name: "Third Media Item",
      date: "2020-07-15",
      medium: "Series",
      watchedOn: 4455,
      isFavorite: false
    },
    {
      id: 4,
      name: "Fourth Media Item",
      date: "2020-08-16",
      medium: "Series",
      watchedOn: 6667777,
      isFavorite: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onMediaItemDelete(mediaItem){
    console.log("deleting", mediaItem);
  }

}

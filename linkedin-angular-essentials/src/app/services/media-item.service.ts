import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class MediaItemService {

  constructor() { }

  mediaItems = [
    {
      id: 1,
      name: "First Media Item",
      date: "2020-05-13",
      medium: "Movies",
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

get(){
  return this.mediaItems;
}

add(mediaItem){
  this.mediaItems.push(mediaItem);
}

delete(mediaItem){
  let index = this.mediaItems.indexOf(mediaItem);
  console.log("Delete index ", index);
  if (index>=0){
    this.mediaItems.splice(index, 1);
    console.log(this.mediaItems);
  }
}

set(mediaItems){
  this.mediaItems = mediaItems;
}

}

import { Component } from '@angular/core';

@Component({
  selector: 'mw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Media Watch List ';

  firstMediaItem = {
    id: 1,
    name: "First Media Item",
    date: "2020-05-13",
    // watchedOn: 112233
    watchedOn: null
  }


  getTitle(){
    return this.title;
  }

}

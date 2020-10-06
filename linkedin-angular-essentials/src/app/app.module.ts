import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { JoinPipe } from './pipes/join.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaItemModelformComponent } from './media-item-modelform/media-item-modelform.component';
// injection token second method - this method is recommended.
import {lookupListToken, lookupList } from './providers'


// injection token first method
// const lookupList = {
//    mediums: ["Movies", "Series"]
// }



@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    JoinPipe,
    MediaItemFormComponent,
    MediaItemModelformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // { provide: "lookupListToken", useValue: lookupList }
    { provide: lookupListToken, useValue: lookupList }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {

  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-onhovering') onhovering = false;


  @HostListener('mouseenter') onMouseEnter (){
    this.onhovering = true;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.onhovering = false;
  }

  @Input() set mwFavorite (value){
    this.isFavorite = value;
  }
  constructor() { }

}

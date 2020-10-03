import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemModelformComponent } from './media-item-modelform.component';

describe('MediaItemModelformComponent', () => {
  let component: MediaItemModelformComponent;
  let fixture: ComponentFixture<MediaItemModelformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaItemModelformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemModelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

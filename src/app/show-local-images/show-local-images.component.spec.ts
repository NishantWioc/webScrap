import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocalImagesComponent } from './show-local-images.component';

describe('ShowLocalImagesComponent', () => {
  let component: ShowLocalImagesComponent;
  let fixture: ComponentFixture<ShowLocalImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLocalImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLocalImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

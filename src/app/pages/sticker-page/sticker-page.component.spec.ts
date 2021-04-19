import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerPageComponent } from './sticker-page.component';

describe('StickerPageComponent', () => {
  let component: StickerPageComponent;
  let fixture: ComponentFixture<StickerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

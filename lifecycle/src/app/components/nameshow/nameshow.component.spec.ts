import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameshowComponent } from './nameshow.component';

describe('NameshowComponent', () => {
  let component: NameshowComponent;
  let fixture: ComponentFixture<NameshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

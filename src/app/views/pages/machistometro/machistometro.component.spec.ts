import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachistometroComponent } from './machistometro.component';

describe('MachistometroComponent', () => {
  let component: MachistometroComponent;
  let fixture: ComponentFixture<MachistometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachistometroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachistometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

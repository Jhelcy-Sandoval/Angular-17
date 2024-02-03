import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitionsComponent } from './view-transitions.component';

describe('ViewTransitionsComponent', () => {
  let component: ViewTransitionsComponent;
  let fixture: ComponentFixture<ViewTransitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

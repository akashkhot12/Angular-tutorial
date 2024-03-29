import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPComponent } from './child-p.component';

describe('ChildPComponent', () => {
  let component: ChildPComponent;
  let fixture: ComponentFixture<ChildPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettasksComponent } from './gettasks.component';

describe('GettasksComponent', () => {
  let component: GettasksComponent;
  let fixture: ComponentFixture<GettasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GettasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GettasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPorductComponent } from './edit-porduct.component';

describe('EditPorductComponent', () => {
  let component: EditPorductComponent;
  let fixture: ComponentFixture<EditPorductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPorductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPorductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

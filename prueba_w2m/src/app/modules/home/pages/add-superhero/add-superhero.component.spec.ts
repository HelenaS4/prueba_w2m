import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperheroComponent } from './add-superhero.component';

describe('AddSuperheroComponent', () => {
  let component: AddSuperheroComponent;
  let fixture: ComponentFixture<AddSuperheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuperheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSuperheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

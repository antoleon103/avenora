import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShapeBuilder } from './shape-builder';

describe('ShapeBuilder', () => {
  let component: ShapeBuilder;
  let fixture: ComponentFixture<ShapeBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapeBuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

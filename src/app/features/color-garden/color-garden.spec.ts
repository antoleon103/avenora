import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorGarden } from './color-garden';

describe('ColorGarden', () => {
  let component: ColorGarden;
  let fixture: ComponentFixture<ColorGarden>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorGarden],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorGarden);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

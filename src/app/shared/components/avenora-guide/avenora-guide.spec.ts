import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvenoraGuide } from './avenora-guide';

describe('AvenoraGuide', () => {
  let component: AvenoraGuide;
  let fixture: ComponentFixture<AvenoraGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvenoraGuide],
    }).compileComponents();

    fixture = TestBed.createComponent(AvenoraGuide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

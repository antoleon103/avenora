import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalMatch } from './animal-match';

describe('AnimalMatch', () => {
  let component: AnimalMatch;
  let fixture: ComponentFixture<AnimalMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalMatch],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalMatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

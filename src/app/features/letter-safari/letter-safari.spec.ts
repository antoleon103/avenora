import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LetterSafari } from './letter-safari';

describe('LetterSafari', () => {
  let component: LetterSafari;
  let fixture: ComponentFixture<LetterSafari>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterSafari],
    }).compileComponents();

    fixture = TestBed.createComponent(LetterSafari);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

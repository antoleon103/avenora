import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheLittleCloud } from './the-little-cloud';

describe('TheLittleCloud', () => {
  let component: TheLittleCloud;
  let fixture: ComponentFixture<TheLittleCloud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheLittleCloud],
    }).compileComponents();

    fixture = TestBed.createComponent(TheLittleCloud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

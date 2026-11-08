import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityPlayer } from './activity-player';

describe('ActivityPlayer', () => {
  let component: ActivityPlayer;
  let fixture: ComponentFixture<ActivityPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPlayer],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityPlayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

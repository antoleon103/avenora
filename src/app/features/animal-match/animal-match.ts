
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

interface AnimalRound {
  name: string;
  emoji: string;
  options: string[];
  description: string;
}

@Component({
  selector: 'app-animal-match',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-match.html',
  styleUrl: './animal-match.scss',
})
export class AnimalMatch {
  @ViewChild('dropZone') dropZone!: ElementRef<HTMLElement>;

  readonly rounds: AnimalRound[] = [
    {
      name: 'Elephant',
      emoji: '🐘',
      options: ['🦁', '🐘', '🐰'],
      description: 'An elephant has a long trunk and big ears!',
    },
    {
      name: 'Lion',
      emoji: '🦁',
      options: ['🐵', '🦁', '🐘'],
      description: 'A lion is known as the king of the jungle!',
    },
    {
      name: 'Giraffe',
      emoji: '🦒',
      options: ['🐰', '🐘', '🦒'],
      description: 'A giraffe has a very long neck!',
    },
    {
      name: 'Monkey',
      emoji: '🐵',
      options: ['🦁', '🐵', '🦒'],
      description: 'Monkeys love climbing and swinging in trees!',
    },
    {
      name: 'Rabbit',
      emoji: '🐰',
      options: ['🐘', '🐰', '🐵'],
      description: 'A rabbit has long ears and loves to hop!',
    },
  ];

  currentRound = 0;
  score = 0;
  finished = false;
  answered = false;
  wrongAttempt = false;

  selectedAnimal: string | null = null;

  dragging = false;
  dragPosition = { x: 0, y: 0 };

  private draggedAnimal: string | null = null;
  private activePointerId: number | null = null;
  private pointerStart = { x: 0, y: 0 };
  private pointerMoved = false;
  private wrongFeedbackTimer?: ReturnType<typeof setTimeout>;

  constructor(private router: Router) {}

  get round(): AnimalRound {
    return this.rounds[this.currentRound];
  }

  get progress(): number {
    return ((this.currentRound + 1) / this.rounds.length) * 100;
  }

  get currentDraggedEmoji(): string {
    return this.draggedAnimal ?? '';
  }

  get draggedAnimalName(): string {
    const names: Record<string, string> = {
      '🐘': 'Elephant',
      '🦁': 'Lion',
      '🦒': 'Giraffe',
      '🐵': 'Monkey',
      '🐰': 'Rabbit',
    };

    return names[this.currentDraggedEmoji] ?? '';
  }

  startDrag(event: PointerEvent, animal: string): void {
    if (this.answered || this.finished) {
      return;
    }

    event.preventDefault();

    this.activePointerId = event.pointerId;
    this.draggedAnimal = animal;

    this.pointerStart = {
      x: event.clientX,
      y: event.clientY,
    };

    this.dragPosition = {
      x: event.clientX,
      y: event.clientY,
    };

    this.pointerMoved = false;
    this.dragging = true;
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (
      !this.dragging ||
      event.pointerId !== this.activePointerId
    ) {
      return;
    }

    const distance = Math.hypot(
      event.clientX - this.pointerStart.x,
      event.clientY - this.pointerStart.y,
    );

    if (distance > 5) {
      this.pointerMoved = true;
    }

    this.dragPosition = {
      x: event.clientX,
      y: event.clientY,
    };
  }

  @HostListener('document:pointerup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    if (
      !this.dragging ||
      event.pointerId !== this.activePointerId
    ) {
      return;
    }

    const animal = this.draggedAnimal;
    const moved = this.pointerMoved;

    const dropRect =
      this.dropZone?.nativeElement.getBoundingClientRect();

    const droppedInside =
      !!dropRect &&
      event.clientX >= dropRect.left &&
      event.clientX <= dropRect.right &&
      event.clientY >= dropRect.top &&
      event.clientY <= dropRect.bottom;

    this.dragging = false;
    this.activePointerId = null;
    this.draggedAnimal = null;

    if (!animal || !moved || !droppedInside) {
      return;
    }

    this.checkMatch(animal);
  }

  @HostListener('document:pointercancel')
  onPointerCancel(): void {
    this.cancelDrag();
  }

  private cancelDrag(): void {
    this.dragging = false;
    this.activePointerId = null;
    this.draggedAnimal = null;
  }

  checkMatch(animal: string): void {
    if (this.answered || this.finished) {
      return;
    }

    this.selectedAnimal = animal;

    if (animal === this.round.emoji) {
      this.answered = true;
      this.wrongAttempt = false;
      this.score++;
      return;
    }

    this.wrongAttempt = true;

    if (this.wrongFeedbackTimer) {
      clearTimeout(this.wrongFeedbackTimer);
    }

    this.wrongFeedbackTimer = setTimeout(() => {
      this.wrongAttempt = false;
    }, 1200);
  }

  nextRound(): void {
    if (!this.answered) {
      return;
    }

    if (this.currentRound < this.rounds.length - 1) {
      this.currentRound++;
      this.selectedAnimal = null;
      this.answered = false;
      this.wrongAttempt = false;
    } else {
      this.finished = true;
    }
  }

  restart(): void {
    if (this.wrongFeedbackTimer) {
      clearTimeout(this.wrongFeedbackTimer);
    }

    this.currentRound = 0;
    this.score = 0;
    this.finished = false;
    this.answered = false;
    this.wrongAttempt = false;
    this.selectedAnimal = null;
    this.dragging = false;
    this.draggedAnimal = null;
  }

  backToExplore(): void {
    this.router.navigate(['/explore']);
  }
}

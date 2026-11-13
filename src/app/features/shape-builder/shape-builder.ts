
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ShapeRound {
  name: string;
  shapeClass: string;
  options: string[];
  description: string;
}

@Component({
  selector: 'app-shape-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shape-builder.html',
  styleUrl: './shape-builder.scss',
})
export class ShapeBuilder {
    rounds: ShapeRound[] = [
  {
    name: 'Circle',
    shapeClass: 'circle',
    options: ['Triangle', 'Circle', 'Square'],
    description: 'A circle is round. It has no corners!',
  },
  {
    name: 'Square',
    shapeClass: 'square',
    options: ['Rectangle', 'Square', 'Circle'],
    description: 'A square has four equal sides.',
  },
  {
    name: 'Triangle',
    shapeClass: 'triangle',
    options: ['Triangle', 'Star', 'Square'],
    description: 'A triangle has three sides and three corners.',
  },
  {
    name: 'Rectangle',
    shapeClass: 'rectangle',
    options: ['Circle', 'Rectangle', 'Triangle'],
    description: 'A rectangle has four sides.',
  },
  {
    name: 'Star',
    shapeClass: 'star',
    options: ['Square', 'Star', 'Circle'],
    description: 'A star has five points in this activity!',
  },
]

  currentRound = 0;
  score = 0;
  selectedShape: string | null = null;
  answered = false;
  finished = false;

  constructor(private router: Router) {}

  get round(): ShapeRound {
    return this.rounds[this.currentRound];
  }

  get progress(): number {
    return ((this.currentRound + 1) / this.rounds.length) * 100;
  }

  chooseShape(shape: string): void {
    if (this.answered || this.finished) {
      return;
    }

    this.selectedShape = shape;
    this.answered = true;

    if (shape === this.round.name) {
      this.score++;
    }
  }

  nextRound(): void {
    if (this.currentRound < this.rounds.length - 1) {
      this.currentRound++;
      this.selectedShape = null;
      this.answered = false;
    } else {
      this.finished = true;
    }
  }

  restart(): void {
    this.currentRound = 0;
    this.score = 0;
    this.selectedShape = null;
    this.answered = false;
    this.finished = false;
  }

  backToExplore(): void {
    this.router.navigate(['/explore']);
  }
}

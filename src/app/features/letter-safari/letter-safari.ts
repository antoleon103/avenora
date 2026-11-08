import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface LetterRound {
  target: string;
  options: string[];
  picture: string;
  word: string;
}

@Component({
  selector: 'app-letter-safari',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letter-safari.html',
  styleUrl: './letter-safari.scss',
})
export class LetterSafari {
  rounds: LetterRound[] = [
    {
      target: 'A',
      options: ['M', 'A', 'S'],
      picture: '🍎',
      word: 'Apple',
    },
    {
      target: 'B',
      options: ['B', 'D', 'P'],
      picture: '🦋',
      word: 'Butterfly',
    },
    {
      target: 'C',
      options: ['G', 'O', 'C'],
      picture: '🐱',
      word: 'Cat',
    },
    {
      target: 'D',
      options: ['D', 'B', 'A'],
      picture: '🐶',
      word: 'Dog',
    },
    {
      target: 'E',
      options: ['F', 'E', 'L'],
      picture: '🐘',
      word: 'Elephant',
    },
  ];

  currentRound = 0;
  score = 0;
  selectedLetter: string | null = null;
  answered = false;
  finished = false;

  constructor(private router: Router) {}

  get round(): LetterRound {
    return this.rounds[this.currentRound];
  }

  get progress(): number {
    return ((this.currentRound + 1) / this.rounds.length) * 100;
  }

  chooseLetter(letter: string): void {
    if (this.answered || this.finished) {
      return;
    }

    this.selectedLetter = letter;
    this.answered = true;

    if (letter === this.round.target) {
      this.score++;
    }
  }

  nextRound(): void {
    if (this.currentRound < this.rounds.length - 1) {
      this.currentRound++;
      this.selectedLetter = null;
      this.answered = false;
    } else {
      this.finished = true;
    }
  }

  restart(): void {
    this.currentRound = 0;
    this.score = 0;
    this.selectedLetter = null;
    this.answered = false;
    this.finished = false;
  }

  backToExplore(): void {
    this.router.navigate(['/explore']);
  }
}
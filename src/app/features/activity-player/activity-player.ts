import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-player.html',
  styleUrl: './activity-player.scss',
})
export class ActivityPlayer {
  readonly questions = [
    { stars: 3, options: [2, 3, 4], answer: 3 },
    { stars: 5, options: [4, 5, 6], answer: 5 },
    { stars: 2, options: [1, 2, 3], answer: 2 },
    { stars: 4, options: [3, 4, 5], answer: 4 },
    { stars: 6, options: [5, 6, 7], answer: 6 },
  ];

  currentQuestionIndex = 0;
  selectedAnswer: number | null = null;
  feedback: 'correct' | 'incorrect' | null = null;
  completed = false;
  correctAnswers = 0;

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  get progressPercentage(): number {
    return (this.currentQuestionIndex / this.questions.length) * 100;
  }

  selectAnswer(answer: number): void {
    if (this.feedback === 'correct' || this.completed) {
      return;
    }

    this.selectedAnswer = answer;

    if (answer === this.currentQuestion.answer) {
      this.feedback = 'correct';
      this.correctAnswers++;
    } else {
      this.feedback = 'incorrect';
    }
  }

  tryAgain(): void {
    this.selectedAnswer = null;
    this.feedback = null;
  }

  nextQuestion(): void {
    if (this.feedback !== 'correct') {
      return;
    }

    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.completed = true;
      return;
    }

    this.currentQuestionIndex++;
    this.selectedAnswer = null;
    this.feedback = null;
  }

  restartActivity(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.feedback = null;
    this.completed = false;
    this.correctAnswers = 0;
  }

  backToExplore(): void {
    this.router.navigate(['/explore']);
  }

  constructor(private router: Router) {}
}
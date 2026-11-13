
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-little-cloud',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './the-little-cloud.html',
  styleUrl: './the-little-cloud.scss',
})
export class TheLittleCloud {
  isStoryStarted = false;
  currentScene = 0;

  constructor(private router: Router) {}
  
  scenes = [
    {
      chapter: 'CHAPTER ONE',
      title: 'A cloud with a dream',
      text: 'Once upon a time, high in the bright blue sky, lived a little fluffy cloud. Every day, the little cloud floated across the sky, wondering what adventures were waiting below.',
      illustration: '☁️',
    },
    {
      chapter: 'CHAPTER TWO',
      title: 'Hello, sunshine!',
      text: 'One lovely morning, the little cloud spotted a warm, golden sun. "Hello, Mr. Sun!" said the little cloud with a happy smile.',
      illustration: '☀️',
    },
    {
      chapter: 'CHAPTER THREE',
      title: 'Little raindrops',
      text: 'The little cloud felt full of tiny raindrops. Drip, drop, drip! It gently sprinkled the thirsty earth below.',
      illustration: '🌧️',
    },
    {
      chapter: 'CHAPTER FOUR',
      title: 'A little flower grows',
      text: 'The raindrops gave a little seed the water it needed. Slowly, a beautiful flower began to grow. The little cloud was so happy!',
      illustration: '🌷',
    },
    {
      chapter: 'CHAPTER FIVE',
      title: 'A magical rainbow',
      text: 'The sun peeked out again, and a beautiful rainbow appeared in the sky. The little cloud discovered that even small things can make a big difference.',
      illustration: '🌈',
    },
  ];

  get progress(): number {
    return ((this.currentScene + 1) / this.scenes.length) * 100;
  }

  get isLastScene(): boolean {
    return this.currentScene === this.scenes.length - 1;
  }

  startStory(): void {
    this.isStoryStarted = true;
    this.currentScene = 0;
  }

  nextScene(): void {
    if (this.currentScene < this.scenes.length - 1) {
      this.currentScene++;
    }
  }

  previousScene(): void {
    if (this.currentScene > 0) {
      this.currentScene--;
    }
  }

  restartStory(): void {
    this.currentScene = 0;
  }

  backToWelcome(): void {
    this.isStoryStarted = false;
    this.currentScene = 0;
  }
  
  goToExplore(): void {
  this.router.navigate(['/explore']);
}

}

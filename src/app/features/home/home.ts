import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  imports: [Header, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy {
  private animationContext?: gsap.Context;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    // Respect users who prefer reduced motion.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    this.animationContext = gsap.context(() => {
      // Section headings reveal as they enter the viewport.
      gsap.from('.section-heading', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.section-heading',
          start: 'top 85%',
          once: true,
        },
      });

      // Learning cards appear with a gentle stagger.
      gsap.from('.journey-card', {
        y: 45,
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.journey-grid',
          start: 'top 82%',
          once: true,
        },
      });

      // Parent section elements reveal in sequence.
      gsap.from('.parent-art, .parent-content', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.parent-section',
          start: 'top 80%',
          once: true,
        },
      });
    }, this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.animationContext?.revert();
  }
}
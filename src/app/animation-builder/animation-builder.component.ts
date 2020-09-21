import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, query, stagger, style } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-builder',
  templateUrl: 'animation-builder.component.html'
})
export class AnimationBuilderComponent implements OnInit {
  player: AnimationPlayer;
  images = [];

  set position(pos: number) {
    this.pause();
    this.player.setPosition(pos / 100);
  }

  ngOnInit(): void {
    this.loadImages();

    setTimeout(() => {
      this.start();
      this.play();
    });
  }

  play(): void {
    this.player.play();
  }

  pause(): void {
    this.player.pause();
  }

  constructor(private builder: AnimationBuilder, private element: ElementRef) {}

  start(): void {
    this.player = this.buildPlayer();
  }

  private buildAnimation(): AnimationFactory {
    return this.builder.build([
      query('.gallery .pics', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        stagger(100, [
          animate('500ms', style({ opacity: 1, transform: 'none' }))
        ])
      ])
    ]);
  }

  private buildPlayer(): AnimationPlayer {
    const animation = this.buildAnimation();
    return animation.create(this.element.nativeElement);
  }

  private loadImages(): void {
    for (let i = 16; i <= 24; i++) {
      this.images.push(`/assets/images/${i}.jpg`);
    }
  }
}

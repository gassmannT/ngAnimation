import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, NoopAnimationPlayer, query, stagger, style } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-builder',
  templateUrl: 'animation-builder.component.html'
})
export class AnimationBuilderComponent implements OnInit {
  paused = false;
  done = false;
  player: AnimationPlayer = new NoopAnimationPlayer();
  images = [];

  set position(pos: number) {
    this.pause();
    this.player.setPosition(pos / 100);
  }

  constructor(private builder: AnimationBuilder, private element: ElementRef) {}

  ngOnInit(): void {
    for (let i = 16; i <= 24; i++) {
      this.images.push(`/assets/images/${i}.jpg`);
    }

    setTimeout(() => {
      this.start();
      this.play();
    });
  }

  play(): void {
    this.paused = false;
    this.player.play();
  }

  pause(): void {
    this.paused = true;
    this.player.pause();
  }

  private buildAnimation(): AnimationFactory {
    return this.builder.build([
      query('.gallery', [
        style({ opacity: 0, transform: 'translateY(0px)' }),
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

  start(): void {
    this.player = this.buildPlayer();
    this.player.onStart(() => {
      this.done = false;
    });
    this.player.onDone(() => {
      this.done = true;
    });
  }
}

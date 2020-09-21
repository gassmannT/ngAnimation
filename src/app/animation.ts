import { animate, animation, style } from '@angular/animations';

export let slideIn = animation([
  style({
    opacity: 0.2,
    transform: 'translateY({{top}}px)'
  }),
  animate(500, style({ opacity: 1, transform: 'translateY(0)' }))
]);

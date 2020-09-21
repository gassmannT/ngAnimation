import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          '.pics:enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger(50, [
              animate(
                '400ms cubic-bezier(.41,.98,.81,.95)',
                style({ opacity: 1, transform: 'none' })
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
  images = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 32; i++) {
      this.images.push(`/assets/images/${i}.jpg`);
    }
  }
}

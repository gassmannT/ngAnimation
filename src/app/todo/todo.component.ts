import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slideIn } from '../animation';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  animations: [
    trigger('slideIn', [
      transition(':enter', [useAnimation(slideIn, { params: { top: '-10' } })])
    ]),

    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(1000)]),
      transition(':leave', [
        animate(250, style({ opacity: 0, transform: 'translateX(-400px)' }))

        // group([
        //   animate('0.3s ease', style({
        //     backgroundColor: 'red'
        //   })),
        //   animate('0.3s 0.2s ease', style({
        //     transform: 'translateX(-4000px)'
        //   }))
        // ])
      ])
    ])

    // trigger('fade', [
    //   transition('void => *', [ // :enter
    //     // fade out the element immediately
    //     style({ opacity: 0 }),
    //     animate(5000, style({ opacity: 1 }))
    //   ]),

    //   transition('* => void', [
    //     // use the existing opacity on the element
    //     style({ opacity: '1' }),
    //     animate('500ms', style({ opacity: 0 }))
    //   ])
    // ])
  ]
})
export class TodoComponent implements OnInit {
  list = [];

  constructor() {}

  ngOnInit(): void {
    this.list = [
      { name: 'Liste erstellen' },
      { name: 'Erster Punkt abhaken' },
      { name: 'Vortrag durchführen' },
      { name: 'Ferien' }
    ];
  }

  remove(item: { name: string }): void {
    this.list = this.list.filter(obj => obj !== item);
  }

  addItem(name: string): void {
    this.list.push({ name });
  }
}

import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routeAnimation', [
      transition(':increment', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':leave', [
          animateChild(),
        ]),
        query(':enter, :leave', [
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ]),
        // animate the leave page away
        group([
          query(':leave', [
            animate(
              '0.3s ease-out', // cubic-bezier(.35,0,.25,1)
              style({ transform: 'translateX(-100%)', opacity: 0 })
            )
          ]),
          // and now reveal the enter
          query(
            ':enter',
            animate('0.3s ease-out', style({ transform: 'translateX(0)' }))
          ),
          query(':enter', [
            animateChild()
          ], { delay: '500ms' })
        ])
      ]),
      transition(':decrement', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':leave', [
          animateChild(),
        ]),
        query(
          ':enter, :leave',
          style({ position: 'absolute', top: 0, left: 0, right: 0 })
        ),
        // animate the leave page away
        group([
          query(':leave', [
            animate(
              '0.3s ease-out',
              style({ transform: 'translateX(100%)', opacity: 0 })
            )
          ]),
          // and now reveal the enter
          query(
            ':enter',
            animate('0.3s ease-out', style({ transform: 'translateX(0)' }))
          ),
          query(':enter', [
            animateChild()
          ], { delay: '500ms' })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  prepRouteAnimation(outlet: RouterOutlet): Data {
    // tslint:disable-next-line:no-string-literal
    return outlet.activatedRouteData['animation'] || '';
  }
}

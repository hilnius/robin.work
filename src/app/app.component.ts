import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, group, query, stagger, keyframes, transition, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

    trigger('footerAnim', [

      transition(':enter', [
        query('a', style({ opacity: 0, transform: 'translateY(+100px)' })),
        query('a', stagger('100ms', [
          animate('0.6s 1s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  
  constructor(public router: Router) {

  }

}

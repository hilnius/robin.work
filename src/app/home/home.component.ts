import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, group, query, stagger, keyframes, transition, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations: [

    trigger('explainerAnim', [

      transition(':enter', [
        query('a.nav-link', style({ opacity: 0, transform: 'translateY(-100px)' })),
        query('a.nav-link', stagger('300ms', [
          animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ]))
      ])
     ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, group, query, stagger, keyframes, transition, style } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('flyAnimation', [
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'scale(0)', opacity: 0 }))
      ]),
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('200ms ease-in', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ])
  ]
})
export class BlogComponent implements OnInit {

  left = 0;
  position = '0px';

  constructor(private router: Router) {   }

  flyTo() {
    console.log("flying");
    this.left += 200;
    this.position = this.left + "px";
  }

  getRouterPosition() {
    return '200px';
  }

  ngOnInit() {
  }

}

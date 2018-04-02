import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, animate, group, query, stagger, keyframes, transition, style } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        style({ transform: 'translateX(-50px)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0px)', opacity: 1 })),
      ])
    ])
  ]
})
export class ArticleComponent implements OnInit {

  postId = 0;
  content = "";

  constructor(private route: ActivatedRoute, private _articlesService: ArticlesService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id']; // --> Name must match wanted parameter
      this._articlesService.getArticle(this.postId).subscribe(articleData => {
        this.content = articleData.content;
      })
    });
  }

}

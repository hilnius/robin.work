import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     
import { BlogComponent } from './blog/blog.component';     
import { ArticleComponent } from './blog/article.component';     

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'blog',
  component: BlogComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: '1'
  }, {
    path: ':id',
    component: ArticleComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'article', component: ArticleComponent},
  { path: 'article/:id', component: ArticleDetailComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'latestnews', component: LatestnewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

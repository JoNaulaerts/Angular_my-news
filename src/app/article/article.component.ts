import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = {id: 0, title: "", subtitle: "", imageUrl: "", imageCaption: "", content: "", author: "", publishDate: "", editor: ""};
  @Input() isDetail: boolean = false;
  @Input() backRoute: string = "''";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  detail(id: number) {
    this.router.navigate(['/article', id]);
  }

  home(backRoute: string) {
    this.router.navigate(['/' + backRoute]);
  }
}

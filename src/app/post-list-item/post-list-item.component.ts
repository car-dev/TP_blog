import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'palegreen';
    } else if (this.post.loveIts < 0) {
      return 'lightcoral';
    } 
  }

}

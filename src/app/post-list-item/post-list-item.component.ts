import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'palegreen';
    } else if (this.post.loveIts < 0) {
      return 'lightcoral';
    } 
  }

  deletePost() {
    this.postService.removePost(this.post);
  }

  likePost() {
    this.post.loveIts +=1;
    this.postService.updatePost(this.post);
  }

  unlikePost() {
    this.post.loveIts -=1;
    this.postService.updatePost(this.post);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import { Post } from '../models/post.model'; 
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts:Post[];
  postsSubscription: Subscription;

  constructor(
    private postsService: PostService
    ) {
   }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }

  onDeletePost(post: Post) {
    //this.postsService.removeBook(post);
  }
  
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}

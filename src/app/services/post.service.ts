import { Injectable, ɵConsole } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

import { Post } from '../models/post.model';

@Injectable()
export class PostService {

  posts = [
      new Post("Lorem Ipsum", "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. "),
      new Post("Angular","Tutorial: Tour of Heroes. The Tour of Heroes tutorial covers the fundamentals of Angular. In this tutorial you will build an app that helps a staffing agency manage its stable of heroes. This basic app has many of the features you'd expect to find in a data-driven application. It acquires and displays a list of heroes, edits a selected hero's detail, and navigates among different views of heroic data."),
      new Post("MDB", "Material Design for Bootstrap. The world's most popular framework for building responsive, mobile-first websites and apps")
  ];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }, (error) => {
          console.log('erreur connexion firebase:', error);
        }
      );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  
  updatePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }
    // getSingleBook(id: number) {
    //   return new Promise(
    //     (resolve, reject) => {
    //       firebase.database().ref('/books/' + id).once('value').then(
    //         (data) => {
    //           resolve(data.val());
    //         }, (error) => {
    //           reject(error);
    //         }
    //       );
    //     }
    //   );
    // }


}
import { Component } from '@angular/core';
import { Post } from '../app/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp_blog';

  posts = [
    new Post("Lorem Ipsum", "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. "),
    new Post("Angular","Tutorial: Tour of Heroes. The Tour of Heroes tutorial covers the fundamentals of Angular. In this tutorial you will build an app that helps a staffing agency manage its stable of heroes. This basic app has many of the features you'd expect to find in a data-driven application. It acquires and displays a list of heroes, edits a selected hero's detail, and navigates among different views of heroic data."),
    new Post("MDB", "Material Design for Bootstrap. The world's most popular framework for building responsive, mobile-first websites and apps")
  ]
}

import { Component } from '@angular/core';
import { Post } from './models/post.model';

import * as firebase from 'firebase';
import { AppSettings } from './app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'tp_blog';
  posts: Post[];

  constructor() {
    const config = {
      apiKey: AppSettings.API_KEY,
      authDomain: AppSettings.AUTH_DOMAIN,
      databaseURL: AppSettings.DATABASE_URL,
      projectId: AppSettings.PROJECT_ID,
      storageBucket: AppSettings.STORAGE_BUCKET,
      messagingSenderId: AppSettings.MESSAGING_SENDER_ID
    };
    firebase.initializeApp(config);
  }

}

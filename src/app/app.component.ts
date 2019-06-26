import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Posts} from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts = [];
  constructor( private apiCall: ApiService) {}

  ngOnInit() {
    this.loadPosts();
  }
  // Get posts list
  loadPosts() {
    this.apiCall.getPosts().subscribe((data: any) => {
      this.posts = data.hits;
      console.log(this.posts);
    });
  }
}

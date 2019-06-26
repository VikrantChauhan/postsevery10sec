import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Posts} from './posts';
import { switchMap } from 'rxjs/operators';
import {Subscription, timer} from 'rxjs';
import {ModalService} from './modal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  posts: Posts[] = [];
  subscription: Subscription;
  public searchText: string;
  details: string;
  loading = true;
  constructor( private apiCall: ApiService, private modalService: ModalService) {}

  ngOnInit() {
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.apiCall.getPosts())
    ).subscribe((data: any) => {
      this.posts = data.hits;
      console.log(this.posts);
      this.loading = false;
    });
  }
  openModal(id: string, post) {
    this.details = JSON.stringify(post);
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

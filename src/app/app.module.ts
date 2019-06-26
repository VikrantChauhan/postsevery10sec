import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import { SearchPipe } from './search.pipe';
import {FormsModule} from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import {ModalService} from './modal.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

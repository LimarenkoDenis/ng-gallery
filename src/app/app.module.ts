import { PhotoService } from './shared/service/photo.service';
import { AppRouting } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoDetailComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    InfiniteScrollModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

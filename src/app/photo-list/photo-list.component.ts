import { Photo } from './../photo';
import { PhotoService } from './../shared/service/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.sass']
})
export class PhotoListComponent implements OnInit {

  public photos: Photo[];

  constructor(private _PhotoService: PhotoService) {
    this._PhotoService = _PhotoService;
  }

  public ngOnInit(): void {
    this.getPhotos();
  }

  public getPhotos() {
    this._PhotoService.getPhotos()
      .subscribe(
        photos => this.photos = photos,
        error => console.log(error)
      );
  }

  onScrollDown() {}
}

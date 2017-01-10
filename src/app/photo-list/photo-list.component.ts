import { Photo } from './../photo';
import { PhotoService } from './../shared/service/photo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  public photos: Photo[];

  constructor(private _PhotoService: PhotoService) {
    this._PhotoService = _PhotoService;
  }

  ngOnInit() {
    this._PhotoService.getPhotos()
    .subscribe(
      photos => this.photos = photos,
      error => console.log(error)
    );
  }

}

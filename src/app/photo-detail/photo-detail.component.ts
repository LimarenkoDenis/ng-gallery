import { Photo } from './../photo';
import { PhotoService } from './../shared/service/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.sass']
})
export class PhotoDetailComponent implements OnInit {

  public photo: Photo;

  constructor(
    private _PhotoService: PhotoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this._PhotoService.getPhoto(+params['id']))
      .subscribe(
        photo => this.photo = photo,
        error => console.log(error)
      );
  }

}

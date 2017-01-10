import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PhotoService {

  private URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private _http: Http) {}

    getPhotos() {
      return this._http.get(`${this.URL}photos?_limit=10`)
        .map(res => res.json())
        .catch(error => Observable.throw(error.json()));
    }

    getPhoto(id) {
      console.log(id);
      return this._http.get(`${this.URL}photos/${id}`)
        .map(res => res.json())
        .catch(error => Observable.throw(error.json()));
    }
}

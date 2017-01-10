import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PhotoService {

  private URL = 'https://jsonplaceholder.typicode.com/';

  constructor(private _http: Http) {}

    getPhotos() {
      return this._http.get(`${this.URL}photos?_page=1&_limit=10`)
        .map(this.extractData)
        .catch(error => Observable.throw(error.json()));
    }

    getPhoto(id: number) {
      console.log(id);
      return this._http.get(`${this.URL}photos/${id}`)
        .map(this.extractData)
        .catch(error => Observable.throw(error.json()));
    }

    private extractData(res: Response) {
      return res.json();
    }
}

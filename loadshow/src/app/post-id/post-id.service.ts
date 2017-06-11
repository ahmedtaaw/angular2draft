import { Injectable } from '@angular/core';
import { Iposts } from './post-id';

import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class postService {
 private _postsURL='http://jsonplaceholder.typicode.com/comments';
  constructor(private _http:Http){}

  getposts(): Observable <Iposts[]> {
    return this._http.get(this._postsURL).map((respone:Response) => <Iposts[]> respone.json())
    .do(data => console.log('All: '+JSON.stringify(data)))
    .catch(this.handleError);
  }
  private handleError(error:Response){
    console.log(error);
    return Observable.throw(error.json().error || 'server Error');
  }
}
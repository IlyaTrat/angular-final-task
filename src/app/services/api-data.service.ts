import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { ApiResponceData } from '../interfaces/youtube/api-responce-data';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  options = {
    type: 'video',
    key: 'AIzaSyBaUTvlej9t_88Olyrp3sUtJ3BVjchgWR0',
    maxResults: '30',
    part: 'snippet',
    q: ''
  };
  url: string = 'https://www.googleapis.com/youtube/v3/search?';

  constructor(private http: HttpClient) { }

  getData () {
    let fullUrl = this.url;
    _.forEach(this.options, (val, key) => {
      console.log(typeof val, typeof key);
      fullUrl += key  + '=' + val + '&';
    });
    console.log(fullUrl);
    return this.http.get<ApiResponceData>(fullUrl);
  }
}

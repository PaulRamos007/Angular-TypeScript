import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnsplashResponse } from './models/unsplash-response';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID ePlNqc4jnxQBmqYUzFl2C1zjzpdW17KvYUirhrNzsRw',
        },
      }
    );
  }
}

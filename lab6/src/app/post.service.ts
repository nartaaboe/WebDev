import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, Photo} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';
  constructor(private client: HttpClient) { }
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id: number): Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }
  createAlbum(newAlbum: Album): Observable<Album>{
    return this.client.post<Album>(`${this.BASE_URL}/albums`, newAlbum);
  }
  getPhotos(id: number): Observable<Photo[]>{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }
}

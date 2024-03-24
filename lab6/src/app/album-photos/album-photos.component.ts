import {Component, OnInit} from '@angular/core';
import {AlbumService} from "../album.service";
import {Photo} from "../models";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgIf,
    NgForOf
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos!: Photo[];
  loaded: boolean = false;
  constructor(private albumService: AlbumService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getPhotos()
  }
  getPhotos(){
    this.loaded = false;
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.albumService.getPhotos(albumId).subscribe((photos) =>{
        this.photos = photos;
        this.loaded = true;
      })
    })
  }
}

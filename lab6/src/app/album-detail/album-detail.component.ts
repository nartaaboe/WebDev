import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Album} from "../models";
import {AlbumService} from "../post.service";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{
  album!: Album;
  newTitle: string = '';
  loaded: boolean= false;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
  }
  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(){
    this.loaded = false;
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    })
  }
  changeTitle(){
    this.album.title = this.newTitle;
  }
}

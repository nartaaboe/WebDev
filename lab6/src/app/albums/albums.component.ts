import {Component, OnInit, signal} from '@angular/core';
import {Album} from "../models";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AlbumService} from "../album.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  newAlbum: Album;
  loaded: boolean = false;
  constructor(private albumService: AlbumService) {
    this.newAlbum = {
      id: 0,
      title: ''
    }
  }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }
  deleteAlbum(id: number){
    this.albums = this.albums.filter((p) => p.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log('deleted');
    })
  }
  addAlbum(){
    this.albumService.createAlbum(this.newAlbum).subscribe((album) =>{
      album.id = this.albums.length + 1;
      this.albums.push(album);
      alert("Post created!");
      this.newAlbum = {} as Album;
    });
  }
}

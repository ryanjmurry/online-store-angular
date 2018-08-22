import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    let newAlbum = new Album(title, artist, description);
    this.albumService.addAlbum(newAlbum);
    console.log(newAlbum);
  }

}

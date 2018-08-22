import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../models/album.model';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumToDisplay: Album;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    });
    this.albumService.getAlbumById(this.albumId).subscribe(dataLastEmittedFromObserver => {
      this.albumToDisplay = new Album(dataLastEmittedFromObserver.title,
                                      dataLastEmittedFromObserver.artist,
                                      dataLastEmittedFromObserver.description)

      console.log(this.albumToDisplay);
    });
  }
}

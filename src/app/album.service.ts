import { Injectable } from '@angular/core';
import { ALBUMS } from './mock-albums';
import { Album } from './models/album.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase){
    this.albums = database.list('albums')
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }
  getAlbumById(albumId: number) {
    // for (let i = 0; i <= ALBUMS.length; i++) {
    //   if (ALBUMS[i].id === albumId) {
    //     return ALBUMS[i];
    //   }
    // }
  }
}

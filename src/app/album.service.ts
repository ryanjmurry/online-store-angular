import { Injectable } from '@angular/core';
import { ALBUMS } from './mock-albums';
import { Album } from './models/album.model';

@Injectable()
export class AlbumService {

getAlbums() {
  return ALBUMS;
}

getAlbumById(albumId: number) {
  for (let i = 0; i <= ALBUMS.length; i++) {
    if (ALBUMS[i].id === albumId) {
      return ALBUMS[i];
    }
  }
}
}

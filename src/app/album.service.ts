import { Injectable } from '@angular/core';
import { ALBUMS } from './mock-albums';
import { Album } from './models/album.model';

@Injectable()
export class AlbumService {

getAlbums() {
  return ALBUMS;
}
}

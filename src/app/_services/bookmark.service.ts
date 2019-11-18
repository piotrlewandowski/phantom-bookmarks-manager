import { Injectable } from '@angular/core';
import * as localforage from 'localforage';
import 'localforage-getitems';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarks: any[];

  constructor() {
    localforage.config({
      name: 'PhantomBookmarks',
      version: 1,
      size: 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName: 'bookmarks_data',
    });
  }

  getAll() {
    return localforage.getItems().then((result) => {
      return result;
    });
  }

  add(url: string) {
    const hash = this.generateHash(url);

    return localforage.setItem(<string>hash, url).then((result) => {
      return result;
    });
  }

  generateHash(url: string) {
    let hash = 0;
    let i;
    let chr;
    let len;

    if (url.length === 0) return hash;

    for (i = 0, len = url.length; i < len; i++) {
      chr = url.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr; //bitwise hash
      hash |= 0; // Convert to 32bit integer
    }

    const hsh = Math.abs(hash);
    return Math.abs(hash).toString(); //*= -1
  }
}

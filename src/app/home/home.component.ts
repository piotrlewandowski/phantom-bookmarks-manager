import { Component, OnInit } from '@angular/core';

import { BookmarkService } from '../_services/bookmark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bookmarks: any = [];

  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit() {
    this.bookmarkService.getAll().then((bookmarks) => {
      this.bookmarks = bookmarks;
    });
  }
}

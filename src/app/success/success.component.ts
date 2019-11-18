import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  url: string;

  constructor(private location: Location) {
  }

  ngOnInit() {
    const { url } = history.state;

    if (!url) {
      this.location.back();
    }

    this.url = url;
  }

}

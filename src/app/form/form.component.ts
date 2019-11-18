import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ValidationService } from '../_services/validation.service';
import { BookmarkService } from '../_services/bookmark.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  bookmarkForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bookmarkService: BookmarkService
  ) { }

  ngOnInit() {
    this.bookmarkForm = this.formBuilder.group({
      url: new FormControl('', Validators.compose([
        Validators.required,
        ValidationService.urlValidator,
      ])),
    });
  }

  onSubmit() {
    // bail out if the form is invalid
    if (this.bookmarkForm.invalid) {
      console.info('form invalid');
      return;
    }

    const { url } = this.bookmarkForm.value;

    this.bookmarkService.add(url).then((result) => {
      this.router.navigateByUrl('/success', { state: { url: result }});
    });
  }

}

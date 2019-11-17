import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators, Form,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  bookmarkForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bookmarkForm = this.formBuilder.group({
      url: ['', Validators.required],
    });
  }

  onSubmit() {
    // bail out if the form is invalid
    if (this.bookmarkForm.invalid) {
      console.info('form invalid');
      return;
    }

    console.info('form:', this.bookmarkForm.value);
  }

}

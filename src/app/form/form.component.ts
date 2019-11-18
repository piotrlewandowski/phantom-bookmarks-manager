import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ValidationService } from '../_services/validation.service';


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

    console.info('form:', this.bookmarkForm.value);
  }

}

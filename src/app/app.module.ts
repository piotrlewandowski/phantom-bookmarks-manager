import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageComponent } from './form/validation-message.component';
import { ValidationService } from './_services/validation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    SuccessComponent,
    PageNotFoundComponent,
    ValidationMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

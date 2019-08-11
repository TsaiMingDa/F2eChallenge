import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditComponent } from './credit/credit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ThanksComponent } from './thanks/thanks.component';
import { WebatmComponent } from './webatm/webatm.component';
@NgModule({
  declarations: [
    AppComponent,
    CreditComponent,
    MainComponent,
    ThanksComponent,
    WebatmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { MaterialModule } from './material/material.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TimerComponent } from './timer/timer.component';
import { SideComponent } from './side/side.component';
@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TimerComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

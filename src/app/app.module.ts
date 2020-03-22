import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import { RegisterModule } from './register/register.module';
import {TicketModule} from './ticket/ticket.module';
import {MapsModule} from './maps/maps.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponentComponent } from './toolbar-component/toolbar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponentComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RegisterModule,
    TicketModule,
    MapsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

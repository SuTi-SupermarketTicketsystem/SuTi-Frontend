import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {RegisterModule} from './register/register.module';
import {TicketModule} from './ticket/ticket.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {ToolbarComponentComponent} from './toolbar-component/toolbar-component.component';
import {SuTiMarketModule} from './maps/su-ti-market.module';

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
    AppRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    SuTiMarketModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

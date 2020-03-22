import {Inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TicketRoutingModule} from './ticket-routing.module';
import {TicketComponent} from './ticket.component';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [TicketComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class TicketModule {}

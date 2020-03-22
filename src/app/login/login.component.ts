import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {TicketComponent} from '../ticket/ticket.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      market: 'Aldi Süd',
      address: {
        street: 'Kaiserstrasse 1337',
        zipCode: '76131',
        city: 'Karlsruhe'
      },
      timeslot: {
        start: '17:00',
        end: '17:30'
      }
    };


    this.dialog.open(TicketComponent, dialogConfig);
  }


}

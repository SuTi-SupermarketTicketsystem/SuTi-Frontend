import {Component, EventEmitter, OnInit} from '@angular/core';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {TicketComponent} from '../../ticket/ticket.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  faTimesCircle = faTimesCircle;

  closing = new EventEmitter<any>();

  ticket = {
    name: 'Aldi',
    position:
      {
        lat: 49.0108342,
        long: 8.3983163
      },
    market: 'Aldi Süd',
    address: {
      street: 'Kaiserstrasse 1337',
      zipCode: '76131',
      city: 'Karlsruhe'
    },
    timeslot: {
      date: '1584895187',
      start: '17:00',
      end: '17:30'
    }
  };

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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  close() {
    this.closing.emit(true);
  }

}

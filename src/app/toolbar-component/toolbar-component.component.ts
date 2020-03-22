import {Component, OnInit} from '@angular/core';
import {faImage} from '@fortawesome/free-regular-svg-icons/faImage';
import {faIdCard} from '@fortawesome/free-regular-svg-icons/faIdCard';
import {faStar} from '@fortawesome/free-regular-svg-icons/faStar';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {TicketComponent} from '../ticket/ticket.component';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss']
})
export class ToolbarComponentComponent implements OnInit {

  faImage = faImage;
  faIdCard = faIdCard;
  faStar = faStar;

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

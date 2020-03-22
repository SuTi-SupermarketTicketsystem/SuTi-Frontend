import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  @Input() location: any;

  @Output() close: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit(true);
  }

}

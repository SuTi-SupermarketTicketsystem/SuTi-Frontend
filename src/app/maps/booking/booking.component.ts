import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  @Input() location: any;
  constructor() { }

  ngOnInit(): void {
  }

}

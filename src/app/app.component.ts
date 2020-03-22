import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SuTi';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}

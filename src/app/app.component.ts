import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SuTi';
  login = true;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((value: NavigationEnd) => {
      if (!document.URL.toString().includes('/login')) {
        this.login = false;
      }
    });
  }

}

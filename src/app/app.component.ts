import { Component } from '@angular/core';


import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './models/tutorial.model';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  navs: Observable<boolean[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.navs = store.select('navs');
  } */

}

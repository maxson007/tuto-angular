import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   _isAuth = false;
  constructor() {
    setTimeout(
      () => {
        this._isAuth = true;
      }, 4000
    );
  }

  get isAuth(): boolean {
    return this._isAuth;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  private _appareilName: string = 'Machine à laver';
  private _appareilStatus: string = 'éteint';
  constructor() { }

  ngOnInit() {
  }

  get appareilName(): string {
    return this._appareilName;
  }

  get appareilStatus(): string {
    return this._appareilStatus;
  }
}

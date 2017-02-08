import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qa-account-info',
  templateUrl: './qa-account-info.component.html',
  styleUrls: ['./qa-account-info.component.scss']
})
export class QaAccountInfoComponent implements OnInit {

  @Input() account;

  constructor() { }

  ngOnInit() {
  }

}

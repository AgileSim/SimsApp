import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qa-card-info',
  templateUrl: './qa-card-info.component.html',
  styleUrls: ['./qa-card-info.component.scss']
})
export class QaCardInfoComponent implements OnInit {

  @Input() card;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { SharedService } from '../app.shared.service';

@Component({
  selector: 'qa-header',
  templateUrl: './qa-header.component.html',
  styleUrls: ['./qa-header.component.scss']
})
export class QaHeaderComponent implements OnInit {

  title: String;

  constructor( private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.stateChange.subscribe((state) => this.title = state + '_TITLE');
  }

}

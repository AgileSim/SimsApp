import { Component, OnInit } from '@angular/core';
import { SharedService } from '../app.shared.service';

@Component({
  selector: 'bktx-header',
  templateUrl: './bktx-header.component.html',
  styleUrls: ['./bktx-header.component.scss']
})
export class BktxHeaderComponent implements OnInit {

  title: String;
  headerClass: String;

  constructor( private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.stateChange.subscribe((state) => {
      this.title = state + '_TITLE';
      this.headerClass = this.title === 'LOGIN_TITLE'
          ? 'bktx-header-container header-login'
          : 'bktx-header-container header-else';
      });
  }

}

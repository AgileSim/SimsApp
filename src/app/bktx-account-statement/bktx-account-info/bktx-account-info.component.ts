import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bktx-account-info',
  templateUrl: './bktx-account-info.component.html',
  styleUrls: ['./bktx-account-info.component.scss']
})
export class BktxAccountInfoComponent {

  @Input() account;
}

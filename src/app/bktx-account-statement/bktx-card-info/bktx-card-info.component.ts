import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bktx-card-info',
  templateUrl: './bktx-card-info.component.html',
  styleUrls: ['./bktx-card-info.component.scss']
})
export class BktxCardInfoComponent {

  @Input() card;
}

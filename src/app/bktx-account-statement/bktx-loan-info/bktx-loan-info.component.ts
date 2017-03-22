import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'bktx-loan-info',
  templateUrl: './bktx-loan-info.component.html',
  styleUrls: ['./bktx-loan-info.component.scss']
})
export class BktxLoanInfoComponent {

  @Input() loan;
}

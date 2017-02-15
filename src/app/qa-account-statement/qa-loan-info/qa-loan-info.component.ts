import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'qa-loan-info',
  templateUrl: './qa-loan-info.component.html',
  styleUrls: ['./qa-loan-info.component.scss']
})
export class QaLoanInfoComponent {

  @Input() loan;
}

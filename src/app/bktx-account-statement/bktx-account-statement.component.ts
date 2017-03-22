import { Component, OnInit } from '@angular/core';

import { BktxAccountStatementService } from './bktx-account-statement.service'
import { SharedService } from '../app.shared.service';
import { Account } from './bktx-account-info/account';
import { Card } from './bktx-card-info/card';
import { Loan } from './bktx-loan-info/loan';

@Component({
  selector: 'bktx-account-statement',
  templateUrl: './bktx-account-statement.component.html',
  styleUrls: ['./bktx-account-statement.component.scss']
})
export class BktxAccountStatementComponent implements OnInit {

  public accounts: Account[] = undefined;
  public cards: Card[] = undefined;
  public loans: Loan[] = undefined;

  constructor( private accountService: BktxAccountStatementService,
    private sharedService:SharedService ) { }

  ngOnInit() {
    this.sharedService.setState('ACCOUNT_STATEMENT');
    this.accountService.getAccounts()
        .subscribe((accounts: Account[]) => this.accounts = Array.from(accounts));
    this.accountService.getCards()
        .subscribe((cards: Card[]) => this.cards = Array.from(cards));
    this.accountService.getLoans()
        .subscribe((loans: Loan[]) => this.loans = Array.from(loans));
  }
}

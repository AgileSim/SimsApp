import { Component, OnInit } from '@angular/core';

import { QaAccountStatementService } from './qa-account-statement.service'
import { SharedService } from '../app.shared.service';
import { Account } from './qa-account-info/account';
import { Card } from './qa-card-info/card';
import { Loan } from './qa-loan-info/loan';

@Component({
  selector: 'app-qa-account-statement',
  templateUrl: './qa-account-statement.component.html',
  styleUrls: ['./qa-account-statement.component.scss']
})
export class QaAccountStatementComponent implements OnInit {

  public accounts: Account[] = undefined;
  public cards: Card[] = undefined;
  public loans: Loan[] = undefined;

  constructor( private accountService: QaAccountStatementService,
    private sharedService:SharedService ) { }

  ngOnInit() {
    this.sharedService.setState('ACCOUNT_STATEMENT');
    this.accountService.getAccounts()
        .subscribe((accounts: Account[]) =>{console.log(accounts); this.accounts = Array.from(accounts);});
    this.accountService.getCards()
        .subscribe((cards: Card[]) => this.cards = Array.from(cards));
    this.accountService.getLoans()
        .subscribe((loans: Loan[]) => this.loans = Array.from(loans));
        console.log(this.accounts);
  }
}

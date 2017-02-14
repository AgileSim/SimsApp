import { Component, OnInit } from '@angular/core';

import { QaAccountStatementService } from './qa-account-statement.service'

@Component({
  selector: 'app-qa-account-statement',
  templateUrl: './qa-account-statement.component.html',
  styleUrls: ['./qa-account-statement.component.scss']
})
export class QaAccountStatementComponent implements OnInit {

  accounts = [
    {
      alias: 'cuenta1',
      iban: 'ES45',
      number: '0123654789654781230',
      balance: 456,
      currency: 'EUR'
    },
    {
      alias: 'cuenta2',
      iban: 'ES45',
      number: '0123654789654781231',
      balance: 41258,
      currency: 'EUR'
    },
    {
      alias: 'cuenta3',
      iban: 'ES45',
      number: '0123654789654781236',
      balance: 2,
      currency: 'EUR'
    }
  ];

  cards = [
    {
      alias: 'tarjeta1',
      number: '7894 5612 3078 9456 1230',
      availableBalance: 200,
      currency: 'EUR',
      disposedBalance: 500,
      grantedCredit: 1000
    },
    {
      alias: 'tarjeta2',
      number: '7894 5612 3078 9456 1232',
      availableBalance: 2001,
      currency: 'EUR',
      disposedBalance: 5001,
      grantedCredit: 10001
    }
  ];

  loans = [
    {
      alias: 'loan1',
      type: 'hipoteca',
      number: '1234567890',
      grantedCredit: 60000,
      currency: 'EUR',
      pendingBalance: 30000
    }
  ];

  constructor( private accountService: QaAccountStatementService) { }

  ngOnInit() {
  }

}

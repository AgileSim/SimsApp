import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QaLoginService } from './qa-login.service';
import { SharedService } from '../app.shared.service';

@Component({
  selector: 'qa-login',
  templateUrl: './qa-login.component.html',
  styleUrls: ['./qa-login.component.scss']
})
export class QaLoginComponent extends OnInit {

  public username: String = '';
  public password: String = '';
  public showError: Boolean = false;

  constructor(
    private loginService: QaLoginService,
    private router: Router,
    private sharedService: SharedService
  ) { super() }

  ngOnInit() {
    this.sharedService.setState('LOGIN');
  }

  checkCredentials(): void {
    this.loginService.tryLogin(this.username, this.password)
      .subscribe(
      _ => this.router.navigate(['../account']),
      _ => this.showError = true);
  }
}

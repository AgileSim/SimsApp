import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BktxLoginService } from './bktx-login.service';
import { SharedService } from '../app.shared.service';

@Component({
  selector: 'bktx-login',
  templateUrl: './bktx-login.component.html',
  styleUrls: ['./bktx-login.component.scss']
})
export class BktxLoginComponent extends OnInit {

  public username: String = '';
  public password: String = '';
  public showError: Boolean = false;

  constructor(
    private loginService: BktxLoginService,
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

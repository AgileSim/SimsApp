import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'qa-login',
  templateUrl: './qa-login.component.html',
  styleUrls: ['./qa-login.component.scss']
})
export class QaLoginComponent {

  username = '';
  password = '';

  checkCredentials() {
    if (this.username === this.password) {
      console.log('Eureka');
    }
  }

}

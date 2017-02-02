import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import { QaHeaderComponent } from './qa-header/qa-header.component';
import { QaLoginComponent } from './qa-login/qa-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('esES');
    translate.use('esES');
  }
}

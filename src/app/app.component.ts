import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import { BktxHeaderComponent } from './bktx-header/bktx-header.component';
import { BktxLoginComponent } from './bktx-login/bktx-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Log in';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('esES');
    translate.use('esES');
  }
}

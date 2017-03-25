import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BktxHeaderComponent } from './bktx-header/bktx-header.component';
import { BktxLoginModule } from './bktx-login/bktx-login.module';
import { BktxAccountStatementModule } from './bktx-account-statement/bktx-account-statement.module';
import { SharedService } from './app.shared.service';

const appRoutes: Routes = [
  { path: '**', redirectTo: '/login'}
]

@NgModule({
  declarations: [
    AppComponent,
    BktxHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: useFactory,
      deps: [Http]
    }),
    BktxLoginModule,
    BktxAccountStatementModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ SharedService ],
  bootstrap: [
    AppComponent

  ]
})

export class AppModule { }

export function useFactory(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

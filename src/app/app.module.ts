import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QaHeaderComponent } from './qa-header/qa-header.component';
import { QaLoginModule } from './qa-login/qa-login.module';
import { QaAccountStatementModule } from './qa-account-statement/qa-account-statement.module';

const appRoutes: Routes = [
  { path: '**', redirectTo: '/login'}
]

@NgModule({
  declarations: [
    AppComponent,
    QaHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: useFactory,
      deps: [Http]
    }),
    QaLoginModule,
    QaAccountStatementModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function useFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

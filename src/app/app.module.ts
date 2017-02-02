import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { QaHeaderComponent } from './qa-header/qa-header.component';
import { QaLoginComponent } from './qa-login/qa-login.component';

@NgModule({
  declarations: [
    AppComponent,
    QaHeaderComponent,
    QaLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: useFactory,
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function useFactory (http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}
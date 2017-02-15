import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import {
    HttpModule,
    XHRBackend,
    RequestOptions,
} from '@angular/http';

import { QaAccountStatementComponent } from './qa-account-statement.component';
import { QaAccountInfoComponent } from './qa-account-info/qa-account-info.component';
import { QaCardInfoComponent } from './qa-card-info/qa-card-info.component';
import { QaLoanInfoComponent } from './qa-loan-info/qa-loan-info.component';
import { QaProductsContainerComponent } from './qa-products-container/qa-products-container.component';
import { QaAccountStatementService } from './qa-account-statement.service'
import { HttpInterceptor } from '../app.interceptors.service';

const accountStatementRoutes: Routes = [
    { path: 'account', component: QaAccountStatementComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        RouterModule.forChild(accountStatementRoutes),
        HttpModule
    ],
    declarations: [
        QaAccountStatementComponent,
        QaAccountInfoComponent,
        QaCardInfoComponent,
        QaLoanInfoComponent,
        QaProductsContainerComponent
    ],
    exports: [],
    providers: [QaAccountStatementService,
        { provide: HttpInterceptor, useClass: HttpInterceptor, deps: [XHRBackend, RequestOptions] }
    ]
})

export class QaAccountStatementModule { }

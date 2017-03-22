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

import { BktxAccountStatementComponent } from './bktx-account-statement.component';
import { BktxAccountInfoComponent } from './bktx-account-info/bktx-account-info.component';
import { BktxCardInfoComponent } from './bktx-card-info/bktx-card-info.component';
import { BktxLoanInfoComponent } from './bktx-loan-info/bktx-loan-info.component';
import { BktxProductsContainerComponent } from './bktx-products-container/bktx-products-container.component';
import { BktxAccountStatementService } from './bktx-account-statement.service'
import { HttpInterceptor } from '../app.interceptors.service';

const accountStatementRoutes: Routes = [
    { path: 'account', component: BktxAccountStatementComponent }
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
        BktxAccountStatementComponent,
        BktxAccountInfoComponent,
        BktxCardInfoComponent,
        BktxLoanInfoComponent,
        BktxProductsContainerComponent
    ],
    exports: [],
    providers: [BktxAccountStatementService,
        { provide: HttpInterceptor, useClass: HttpInterceptor, deps: [XHRBackend, RequestOptions] }
    ]
})

export class BktxAccountStatementModule { }

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


import { BktxLoginComponent } from './bktx-login.component';
import { BktxLoginService } from './bktx-login.service';
import { HttpInterceptor } from '../app.interceptors.service';

const loginRoutes: Routes = [
    { path: 'login', component: BktxLoginComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(loginRoutes),
        TranslateModule,
        HttpModule
    ],
    declarations: [
        BktxLoginComponent
    ],
    exports: [RouterModule],
    providers: [BktxLoginService,
        { provide: HttpInterceptor, useClass: HttpInterceptor, deps: [XHRBackend, RequestOptions] }
    ]
})

export class BktxLoginModule { }

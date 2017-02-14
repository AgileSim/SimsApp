import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { HttpModule } from '@angular/http';


import { QaLoginComponent } from './qa-login.component';
import { QaLoginService } from './qa-login.service';

const loginRoutes: Routes = [
    { path: 'login', component: QaLoginComponent }
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
        QaLoginComponent,
    ],
    exports: [ RouterModule ],
    providers: [ QaLoginService ]
})

export class QaLoginModule { }

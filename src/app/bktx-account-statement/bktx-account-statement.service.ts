import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';;
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Account } from './bktx-account-info/account';
import { Card } from './bktx-card-info/card';
import { Loan } from './bktx-loan-info/loan';
import { HttpInterceptor } from '../app.interceptors.service';
import { environment } from '../../environments/environment';

@Injectable()
export class BktxAccountStatementService {

    private backUrlProducts = environment.urlAPI + '/products'

    constructor(private http: HttpInterceptor) {}

    getAccounts(): Observable<Account[]> {
        return this.http.get(this.backUrlProducts + '/accounts')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getCards(): Observable<Card[]> {
        return this.http.get(this.backUrlProducts + '/cards')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getLoans(): Observable<Loan[]> {
        return this.http.get(this.backUrlProducts + '/loans')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json() || {};
    }

    private handleError() {
        return Observable.throw('Error while retrieveng products');

    }
}

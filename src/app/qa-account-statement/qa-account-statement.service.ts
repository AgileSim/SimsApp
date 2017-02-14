import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class QaAccountStatementService {

    private backUrlProducts = 'http://345.345.345.345:8080/products'

    constructor(private http: Http) {}

    getAccounts() {
        return this.http.get(this.backUrlProducts + '/accounts')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getCards() {
        return this.http.get(this.backUrlProducts + '/cards')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getLoans() {
        return this.http.get(this.backUrlProducts + '/loans')
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError() {
        return 'Error while retrieveng products';
    }
}
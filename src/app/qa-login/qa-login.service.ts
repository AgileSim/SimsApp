import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';;
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class QaLoginService {

    private loginUrl = 'http://localhost:8000/authenticate';

    constructor (private http: Http) { }

    tryLogin1 (username: String, password: String) {
        return Promise.resolve('any');
    }

    tryLogin (username: String, password: String): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let body = {
                username,
                password
        };
        let options = new RequestOptions({ headers, method: RequestMethod.Post  });

        return this.http.post(this.loginUrl, JSON.stringify(body), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData (res: Response) {
        return res.ok;
    }

    private handleError (error: Response | any) {
        console.log(error);
        return Observable.throw('Error while retrieveng products');
    }
}
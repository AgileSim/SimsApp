import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';;
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { HttpInterceptor } from '../app.interceptors.service';
import { environment } from '../../environments/environment';

@Injectable()
export class QaLoginService {

    private loginUrl = environment.urlAPI + '/authenticate';

    constructor (private http: HttpInterceptor) { }

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
        return Observable.throw('Error while retrieveng products');
    }
}
import { Injectable } from '@angular/core';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpInterceptor extends Http {

    private session: string = '';
    /*constructor(backend: ConnectionBackend,
                defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }*/

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        let ownOptions: RequestOptionsArgs = options || new RequestOptions();
        if(ownOptions.headers) {
            ownOptions.headers.append('session', this.session);
        } else {
            ownOptions.headers = new Headers({ session: this.session});
        }
        return super.get(url, ownOptions);
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        let ownOptions: RequestOptionsArgs = options || new RequestOptions();
        return super.post(url, body, ownOptions)
        .map(response => { this.session = response.headers.get('session'); return response; });
    }

}
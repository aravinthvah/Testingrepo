import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { Observable } from 'rxjs';
import { HttpService } from '../common/http.service';
import { LocalStorageService } from '../common/localStorage.service';

@Injectable()
export class Crmservice {

    constructor(private https: HttpClient, private _httpService: HttpService, public _localService: LocalStorageService) {

    }

	public login(data:any) {
		console.log(data)
		const info = {
			body: {
				url: `web/session/authenticate`,
				input: {
					jsonrpc: '2.0',
					method: 'call',
					params: {
						login: data.login,
						password: data.password,
						db: data.db
					}
				}
			}
		};
		console.log(info);
		return this._httpService.post(info);
	}

}
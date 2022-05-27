import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';





@Injectable({
	providedIn: 'root'
})
export class HttpService {


//	private gatewayUrl: string;
	private defaultUrl: string;

	constructor(private http: HttpClient, ) {
	//	this.gatewayUrl = 'https://gateway.parrot.solutions/index.php';
		// this.gatewayUrl = "http://192.168.1.9/index.php";
		// this.defaultUrl = 'https://dmsserver.parrot.solutions/';
		this.defaultUrl = 'http://crmserver.knockbrain.com:8069/';
		// this.defaultUrl = 'http://3.108.41.70:8069/';

		// this.defaultUrl = "http://192.168.1.9:8069/";
	}

	public get(info: any): any {
		if (this.preCheck(info, false)) {
			return this.http.get(info.body.url,{ headers: info.options });
		} else {
			return throwError("Api missint");
		}
	}
	

	public post(info: any): any {
		console.log(info.body.input)
		if (this.preCheck(info, false)) {
			return this.http.post( info.body.url,info.body.input ,{ headers: info.options });
		} else {
			return throwError("Api missint");
		}
	}

	public put(info: any): any {
		if (this.preCheck(info, false)) {
			return this.http.put(info.url, info.body, { headers: info.options });
		} else {
			return throwError("Api missint");
		}
	}

	public delete(info: any): any {
		if (this.preCheck(info, false)) {
			return this.http.delete(info.url, { headers: info.options });
		} else {
			return throwError("Api missint");
		}
	}

	upload(file:any,data:any): Observable<any> {
		console.log(file,data)
		let headers = new HttpHeaders();
		//this is the important step. You need to set content type as null
		headers.set('Content-Type', null!);
		headers.set('Accept', "multipart/form-data");
		let params = new HttpParams();
		console.log(file)
		const formData: FormData = new FormData();
		for (var i = 0; i < file.length; i++) { 
			formData.append("file",file[i]);
		  }
		formData.append('name', data.name);
		formData.append('user_id', "1"); 
		// formData.append('dateTime', data.dateTime); 
		formData.append('location', data.place); 
		formData.append('description', data.description); 
		formData.append('type', data.complaintType); 
		// formData.append('departmentType', data.departType);
		formData.append('date_of_incident', data.date);
		formData.append('time', data.time);
		formData.append('department_id', data.departId); 

		// let input = {
		// 	vals:formData
		// }
		console.log(formData)
		const res = new HttpRequest('POST', 'http://65.1.94.18:8000/document/create_complaint/', formData, {
			reportProgress: true,
			responseType: 'json'
		});
		return this.http.request(res);
	}
	// public upload(info: any): any {
	// 	if (this.preCheck(info, true)) {
	// 		const url = this.defaultUrl+ info.url
	// 		return this._upload.upload(url, info.body);
	// 	} else {
	// 		return Observable.throw('apiKey missing');
	// 	}
	// }


	private preCheck(info: any, header:any): any {
		const account = localStorage.getItem('account');
		const pAccount = localStorage.getItem('pAccount');
		if (info) {
			const headers: HttpHeaders = new HttpHeaders()
				.set('Accept', 'application/json')
				.set('Content-Type', 'application/json');
			if (account) {
				//info.body.session_id = account ;
			}
			if (pAccount) {
			//	info.body.session_id = pAccount ;
			}
			info.options = headers;
			info.body.url = this.defaultUrl + info.body.url;
			return true;
		} else {
			return false;
		}
	}

}

// tslint:disable-next-line:max-classes-per-file
@NgModule({
	providers: [HttpService,  ],
	imports: [HttpClientModule],
	// declarations: [DatePipe],
	// exports: [DatePipe]
})
export class CommonServiceModule {
}

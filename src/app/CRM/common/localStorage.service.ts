import { Injectable, NgModule } from '@angular/core';


@Injectable()
export class LocalStorageService {
	url: string ="url"
	public setLocalStorage(key: string, data: any) {
		localStorage.setItem(key, JSON.stringify(data));
	}

	public getLocalStorage(key: string ){
		const data = JSON.parse(localStorage.getItem(key)|| '{}') ;

		return data;
	}
	setUrl(value:string)
	{
		window.localStorage.removeItem(this.url)
		window.localStorage.setItem(this.url,value)
	}
	getUrl()
	{
		return window.localStorage.getItem(this.url)
	}
	
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

export class NetworkInfoData {
    ISP: string;
    IP: string;
    City: string;
    Country: string;
}

@Injectable()
export class NetworkInfoService {
    constructor(private _http: Http) { }
    getNetworkInfo() {
        return this._http.get('http://ip-api.com/json')
            .map(response => response.json());
    }
}
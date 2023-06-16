import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { take } from "rxjs/operators";
//import { take } from "rxjs";


@Injectable
    ({
        providedIn: 'root',
    })

export class BackendService {

    server: string ="https://jsonplaceholder.typicode.com/"

    constructor(private http: HttpClient) {
    }

   
    put(url: string, data: any) {
        return this.http.put(this.server + url, data)
    }

    get(url: string) {
        return this.http.get(this.server + url).pipe(take(1));
    }


    post(url: string, data: any) {
        console.log(this.server + url);
        console.log(this.server);
        console.log(url);
        return this.http.post(this.server + url, data).pipe(take(1));
    }

    delete(url: string) {
        return this.http.delete(this.server + url).pipe(take(1));
    }


    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Origin: '*',
            Accept: 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
        })
    };


}
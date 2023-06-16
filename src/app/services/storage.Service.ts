import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})

export class StorageService {
    constructor() {
    }

     remove(key: string) {
        localStorage.removeItem(key);
    }

     get(key: string) {
        return localStorage.getItem(key);
    }

    set(key: string, value: any) {
        localStorage.setItem(key,value)
    }

  
    saveToken(token: string) {
        localStorage.setItem("token", token);
    }


    saveAdminNameDetails(username: string, datail: string, adminname: string) {
        localStorage.setItem('adminname', adminname);
        localStorage.setItem('datail', datail);
        localStorage.setItem('username', username);
    }

    clearNameDetails() {
        localStorage.remove('adminname');
        localStorage.remove('datail');
        localStorage.remove('username');
    }

    clearToken() {
        localStorage.remove('token');
    }

}
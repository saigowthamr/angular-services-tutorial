import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })



export class Logger {

    constructor() {

    }

    sai(msg: any) {
        console.log(msg);
    }
}
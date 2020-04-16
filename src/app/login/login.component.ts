import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl:'login.component.html',
    styleUrls:['login.component.scss']
})

export class LoginComponent{
    constructor(private routing: Router){

    }
    login(){
        this.routing.navigate(['./home']);
    }
}
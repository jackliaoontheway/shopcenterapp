import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router) {}

    username: string;
    password: string;

    ngOnInit() {}

    onLoggedin() {
        console.log(this.username + '-' + this.password);
        if (this.username === 'admin' && this.password === 'admin') {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/products']);
        } else {
            alert('用户名或密码错误!');
        }
    }
}

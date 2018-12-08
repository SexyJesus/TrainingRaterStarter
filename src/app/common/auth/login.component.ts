import { Component, OnInit } from '@angular/core';

import { ToastsManager } from 'ng2-toastr';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginDetailComponent implements OnInit {

    email = '';
    password = '';


    constructor(
        private router: Router,
        private toastsManager: ToastsManager,
        private authService: AuthService,
    ) { }

    ngOnInit() {
    }

    login(): void {
        this.authService.login(this.email, this.password)
            .subscribe(
                (response) => {
                    if (response.success) {
                this.toastsManager.success(response.token);
                    } else {
                        this.toastsManager.error('No Bueno');
                    }
                }
            );
        this.toastsManager.info('email: ${this.email} password: ${this.password}');
    }

}

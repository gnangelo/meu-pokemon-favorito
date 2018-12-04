import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginService } from './../service/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  usuario: 'trainer@pokemon.com';
  senha: 'p0k3l1f3';


  autenticar: any;
  responseData: any;

  constructor(private router: Router, private loginService: LoginService) {  }

  ngOnInit() {
    this.autenticar = { };

  }

  onSubmit(f: FormGroup) {
    this.loginService.onSubmit(this.autenticar)
      .subscribe(response => {
        this.responseData = response;

        this.router.navigate(['/pokemon-favorito']);
      }, error => {
      console.log(error);
      this.router.navigate(['/pagina-erro']);
    });
  }
  ngOnDestroy() {
    console.log('conponete login foi destruido');
  }

}

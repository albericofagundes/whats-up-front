//Nativos
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarDados();
  }

  private inicializarDados() {
    this.gerarformLogin();
  }

  private gerarformLogin(): void {
    this.formLogin = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null],
    });
  }
}

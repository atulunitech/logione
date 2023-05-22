import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgxOtpInputConfig } from 'ngx-otp-input';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 hide = true;
 RememberMe = true;
 email_show = true;
 otp_show= false;
  constructor() { }

  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valueYou must enter a valueYou must enter a valueYou must enter a valueYou must enter a valueYou must enter a value';
    }

    return this.email.hasError('email') ? 'You must enter a value' : '';
  }
  viewotp(){
    this.otp_show = true;
    this.email_show = false;
    console.log("jdl")
  }

  move(e:any, p:any, c:any, n:any){
    var length =  c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if(length == maxlength){
      if(n != ""){
        n.focus();
      }
    }
    if(e.key === 'Backspace'){
      if(p != ""){
        p.focus();  
      }
     
    }
    
  }
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  handeOtpChange(value: string[]): void {
    console.log(value);
  }

  handleFillEvent(value: string): void {
    console.log(value);
  }
}

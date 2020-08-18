import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {


  public inputType:string = 'password';

  constructor() { }

  ngOnInit(): void {
  }

  // show Password
  public showPassword():void{
    (this.inputType === 'password')? this.inputType = 'text' : this.inputType = 'password';
  }

}

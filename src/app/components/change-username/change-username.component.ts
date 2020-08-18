import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {

  username:string = '';
  password:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

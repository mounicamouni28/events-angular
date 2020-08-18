import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  message:string = 'Good Afternoon';
  imageSource:string = 'https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg';
  buttonMessage:string = null;


  constructor() { }

  ngOnInit(): void {
  }

  // get Date
  public getDate():string{
    return new Date().toLocaleDateString();
  }

  // display Data
  public displayData():void{
    this.buttonMessage = 'We Click on Button';
  }

  // get User Data
  public getUserData(input:HTMLInputElement):void{
    alert(input.value);
  }

}

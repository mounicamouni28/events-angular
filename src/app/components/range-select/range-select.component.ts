import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-select',
  templateUrl: './range-select.component.html',
  styleUrls: ['./range-select.component.css']
})
export class RangeSelectComponent implements OnInit {

  public amount:string = null;
  constructor() { }

  ngOnInit(): void {
  }

}

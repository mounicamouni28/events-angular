import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent implements OnInit {

  public count:number = 0;
  public minutes:number = 0;
  public seconds:number = 0;
  public milliSeconds:number = 0;
  public interval:number = 0;
  public counterRunning:boolean = false;

  // start Counter
  public startCounter():void{
    if(!this.counterRunning){
      this.interval = setInterval(() => {
        this.count++;

        this.minutes = Math.floor((this.count/100)/60);
        this.seconds = Math.floor((this.count/100) - (this.minutes * 60));
        this.milliSeconds = Math.floor(this.count - (this.seconds * 100) - (this.minutes * 6000));
      },10);
      this.counterRunning = true;
    }
  }

  // stop Counter
  public stopCounter():void{
    clearInterval(this.interval);
    this.counterRunning = false;
  }

  // reset Counter
  public resetCounter():void{
    clearInterval(this.interval);
    this.count = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.milliSeconds = 0;
    this.interval = 0;
    this.counterRunning = false;
  }

  // leading Zero
  public leadingZero(time:number):string{
    if(time <= 9){
      return '0' + time;
    }
    else{
      return String(time);
    }
  }












  constructor() { }

  ngOnInit(): void {
  }

}

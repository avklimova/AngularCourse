import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements AfterViewInit {
  text = "SecondEvoApp";
  
  ngAfterViewInit(): void {
      setInterval(() => {
      this.text = this.text === "SecondEvoApp" ? "second-component works!" : "SecondEvoApp";
    }, 2000);
  }
}
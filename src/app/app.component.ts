import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hidePassword = false;
  buttonLogArray = [];
  counter = 0;

  toggle() {
    this.hidePassword = !this.hidePassword;
    this.buttonLog();
  }

  buttonLog() {
    this.buttonLogArray.push(this.counter++);
    console.log(this.buttonLogArray);
  }
}

import { Component, OnInit } from '@angular/core';

declare const AngularUWP: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit() {
    var test = new AngularUWP.RuntimeComponent.TestClass();
    let world = test.testFunction();
    this.title = world;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  randomNumber: number = 0;
  constructor() { }
  generateRndNum(){
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  ngOnInit() {
  }
}

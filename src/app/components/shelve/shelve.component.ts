import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelve',
  templateUrl: './shelve.component.html',
  styleUrls: ['./shelve.component.css']
})
export class ShelveComponent implements OnInit {

  items = ["1","2","3","4","5","6","7","8","9","10","12"]

  constructor() { }

  ngOnInit() {
  }

}

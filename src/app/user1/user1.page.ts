import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.page.html',
  styleUrls: ['./user1.page.scss'],
})
export class User1Page implements OnInit {

  constructor() { }
  public form = {
    first_name: "",
    last_name: "",
    number: "",
    email: ""

  }
  ngOnInit() {
  }
  print() {
    console.log(this.form)
  }
}

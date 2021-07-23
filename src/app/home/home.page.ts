import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { User1Page } from '../user1/user1.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ngOnInit(){

  }
  home(){
    this.router.navigate(['user1']);
  }
 
  
}

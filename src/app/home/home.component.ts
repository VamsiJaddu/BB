import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  constructor(private routing: Router){

  }
  veg(){
      this.routing.navigate(['./vegetables']);
  }
  fruit(){
    this.routing.navigate(['./fruits']);
  }
  egg(){
    this.routing.navigate(['./nonveg']);
  }
}


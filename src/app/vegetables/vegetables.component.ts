 import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.scss']
})
export class VegetablesComponent{
  constructor(private routing: Router){

  }
  potato(){
      this.routing.navigate(['./vegetables']);
  }
}


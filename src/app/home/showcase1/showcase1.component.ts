import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase1',
  templateUrl: './showcase1.component.html',
  styleUrls: ['./showcase1.component.scss']
})
export class Showcase1Component implements OnInit {

  imgPath: string;

  constructor() {
    this.imgPath="/src/assets/clothes/hoodies/j.jpg"
   }


  ngOnInit(): void {
  }

}

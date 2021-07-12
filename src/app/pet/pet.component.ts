import { Component, OnInit } from '@angular/core';
import { Pet } from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  pet: Pet = {
    name: 'Mèo méo meo',
    image: 'https://giaingo.info/wp-content/uploads/2021/03/tran-duc-bo-meo-meo-meo.jpg',
    info: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  updateName(name: string) {
    this.pet.name = name;
  }

  updateImage(image: string) {
    this.pet.image = image;
  }

}

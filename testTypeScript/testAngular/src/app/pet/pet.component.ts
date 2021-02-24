import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent  {
  petName = 'puppie';
  petImage = 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/9/1/832593/Ngoc-Trinh-4.jpg';
  constructor() { }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

}

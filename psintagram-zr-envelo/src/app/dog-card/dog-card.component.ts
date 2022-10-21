import { Component, OnInit, Input  } from '@angular/core';
import { Breed } from '../Breed';


@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {
  @Input() selectedBreed!: Breed;
  @Input() selectedBreedImage!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

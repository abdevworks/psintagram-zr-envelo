import { Component, Input } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { Breed } from '../Breed';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss'],
})
export class DogListComponent {
  @Input() dogsList!: Breed[];
  selectedBreed: any;
  selectedBreedImage: string = "";
  constructor(private service: DogsService) {}

  capitalize(name: string) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }

  handleBreedChange() {
    this.service.getSelectedBreed(this.selectedBreed).subscribe((response) => {
      this.selectedBreedImage  = (<any>response).message;
    });
  }
}

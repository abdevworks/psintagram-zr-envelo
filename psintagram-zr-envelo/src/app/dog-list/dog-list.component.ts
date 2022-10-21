import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { Breed } from '../Breed';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss'],
})
export class DogListComponent implements OnInit {
  dogsData: any;
  dogsList: Breed[] = [];
  selectedDog: Breed = {breed: ""};
  constructor(private service: DogsService) {}

  ngOnInit(): void {
    this.service.getDogs().subscribe((response) => {
      this.dogsData = response;
      this.formatDataList(this.dogsData);
    });
  }

  formatDataList(data: any) {
    const breedsList: [string, string[]][] = Object.entries(
      data.message
    );
    breedsList.forEach((breed) => {
      if (breed[1].length === 0) {
        const breedInfo: Breed = {
          breed: breed[0],
        };
        this.dogsList.push(breedInfo);
      }
      for (let i = 0; i < breed[1].length; i++) {
        const breedInfo: Breed = {
          breed: breed[0],
          subBreed: breed[1][i],
        };
        this.dogsList.push(breedInfo);
      }
    });
  }

  capitalize(name: string){
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }

  handleBreedChange(){
    console.log(this.selectedDog);
  }
}

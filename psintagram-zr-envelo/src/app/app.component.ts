import { Component, OnInit  } from '@angular/core';
import { DogsService } from './services/dogs.service';
import { Breed } from './Breed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: DogsService) {}
  dogsData: any;  //dog breed data from API
  dogsList: Breed[] = []; //formated dog breed data

  ngOnInit(): void {
    this.service.getAllBreeds().subscribe((response) => {
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
}

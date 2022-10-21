import { Breed } from './../Breed';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  private url = 'https://dog.ceo/api/breeds/list/all';

  constructor(private httpClient: HttpClient) {}

  getAllBreeds() {
    return this.httpClient.get(this.url);
  }

  getSelectedBreed(selectedBreed: Breed) {
    if(!selectedBreed.subBreed){
      return this.httpClient.get(
        `https://dog.ceo/api/breed/${selectedBreed.breed}/images/random`
      );
    }
    return this.httpClient.get(
      `https://dog.ceo/api/breed/${selectedBreed.breed}/${selectedBreed.subBreed}/images/random`
    );
  }
}

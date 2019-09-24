import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-star-wars-data',
  templateUrl: './star-wars-data.component.html',
  styleUrls: ['./star-wars-data.component.scss']
})
export class StarWarsDataComponent implements OnInit {
  films;

  constructor(private apiService: ApiService) { }

  getFilm() {
    let filmSearch = document.getElementById("filmSearch") as HTMLInputElement;

    this.apiService.getAPIData('https://swapi.co/api/films/?search=' + filmSearch.value).subscribe((data) => {
      console.log(data); 
      this.films = data['results'];
    });
  }

  ngOnInit() {

  }

}
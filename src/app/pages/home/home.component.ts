import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "src/app/models/movie";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    movies: Movie[] = [];

    constructor(private movieService: MoviesService) {}

    ngOnInit(): void {
        this.movieService.getMovies().subscribe((response: any) => {
            this.movies = response.results;
            console.log(this.movies);
        });
    }
}

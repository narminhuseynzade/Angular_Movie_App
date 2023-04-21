import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=e93d4948d63dadd126969b54d6b479d6"
        );
    }
}

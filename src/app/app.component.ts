import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component'
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MoviesComponent]
})
export class AppComponent {
  title = 'ng-chat';
}

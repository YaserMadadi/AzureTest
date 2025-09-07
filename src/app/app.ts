import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './views/common-views/index-view/header/header';
import { TopBar } from './views/common-views/index-view/top-bar/top-bar';
import { Footer } from './views/common-views/index-view/footer/footer';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AppHeader,
    TopBar,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',

})
export class App {
  protected title = 'frontend';
}

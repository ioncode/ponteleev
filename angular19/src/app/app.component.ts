import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleCommentsComponent} from './article-comments.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Menu positioning
 */
@Component({
  selector: 'menu-position-example',
  templateUrl: './menu-position-example.html',
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuPositionExample {}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleCommentsComponent, MatSlideToggleModule, MenuPositionExample],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19';
}

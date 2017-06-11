import { Component } from '@angular/core';
import {postService}from './post-id/post-id.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[postService]
})
export class AppComponent {
  title = 'app works!';
}

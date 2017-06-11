import { Component, OnInit } from '@angular/core';
import {postService} from './post-id.service';
import {Iposts} from './post-id';
@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css']
})
export class PostIdComponent implements OnInit {
  posts:Iposts[];
  constructor(private _postService:postService) { }

  ngOnInit() {
    this.posts=this._postService.getposts();
  }

}

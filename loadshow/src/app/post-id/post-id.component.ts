import { Component, OnInit } from '@angular/core';
import {postService} from './post-id.service';
import {Iposts} from './post-id';
@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css']
})
export class PostIdComponent implements OnInit {
  showImage: boolean = true;
  posts:Iposts[];
  errorMessage:string;
  constructor(private _postService:postService) { }

  ngOnInit() {
    this._postService.getposts()
    .subscribe(
    posts=>this.posts=posts,
    error=>this.errorMessage=<any>error,
      () => {
        this.toggleImage()
      }
    );
  }


    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}

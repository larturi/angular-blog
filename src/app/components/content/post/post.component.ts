import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { IPost } from '../../../interfaces/ipost';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: IPost;
  public showPost: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {

    const self = this;

    this.route.params.subscribe(params => {
      const id = params.id;
      this.postService.getPostById(id).subscribe(post => {
         if (post) {
           self.post = new Post(post);
           this.showPost = true;
         }
      });
    });

  }

}

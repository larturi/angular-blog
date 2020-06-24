import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/ipost';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public posts: IPost[] = [];
  public showPosts: boolean = false;
  public page: number;

  constructor(
    public config: ConfigService,
    private postService: PostService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.page = 1;

    const self = this;

    this.router.params.subscribe(params => {

      if (params.category) {

        const category = params.category;
        this.postService.getPostsByCategory(category).subscribe(listPosts => {
          self.posts = listPosts;
          self.showPosts = true;
        }, error => {
          console.error(error);
          self.showPosts = true;
        });

      } else if (params.value) {

        const value = params.value;
        this.postService.getPostsByName(value).subscribe(listPosts => {
          self.posts = listPosts;
          self.showPosts = true;
        }, error => {
          console.error(error);
          self.showPosts = true;
        });

      } else {

        this.postService.getPosts().subscribe(listPosts => {
          self.posts = listPosts;
          self.showPosts = true;
        }, error => {
          console.error(error);
          self.showPosts = true;
        });
      }

    });


  }

}

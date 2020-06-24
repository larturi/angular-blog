import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../../../interfaces/icomment';
import { CommentService } from '../../../../services/comment.service';
import { ConfigService } from '../../../../services/config.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  @Input() idPost: string;
  public listComments: IComment[] = [];
  public showComments = false;
  public page = 1;

  constructor(
    private commentService: CommentService,
    public config: ConfigService
    ) { }

  ngOnInit(): void {

    this.commentService.getCommentsByIdPost(this.idPost).subscribe(comments => {
       if (comments && comments.length > 0) {
        this.listComments = comments;
       }
    }, error => {
      console.error(error);
    });

    this.showComments = true;

  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';
import { IComment } from '../interfaces/icomment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private afd: AngularFireDatabase
  ) { }

  getLastComments(): Observable<Comment[]> {
    return this.afd.list<Comment>('/comments', ref =>
      ref.orderByChild('date').limitToFirst(5)
    ).valueChanges();
  }

  getComments(): Observable<Comment[]> {
    return this.afd.list<Comment>('/comments').valueChanges();
  }

  addComment(comment: Comment) {
    this.afd.list('/comments').push(comment.getData());
  }

  getCommentsByIdPost(idPost: string): Observable<IComment[]> {
     return this.afd.list<IComment>('/comments', ref =>
        ref.orderByChild('post').equalTo(idPost)
     ).valueChanges();
  }

}

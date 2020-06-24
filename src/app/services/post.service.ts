import { IPost } from './../interfaces/ipost';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import * as moment from 'moment';
import * as _ from 'lodash';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private afd: AngularFireDatabase
  ) { }


  getPosts(): Observable<IPost[]> {
    return this.afd.list<IPost>('posts').valueChanges();
  }

  getPostById(id: string): Observable<IPost> {
    return this.afd.object<IPost>('posts/' + id).valueChanges();
  }

  getPostsByCategory(idCategory: string): Observable<IPost[]> {
     return this.getPosts().pipe(
       map(posts => {

        const postsFiltered = [];

        _.forEach(posts, p => {
          const categoryFound = _.find(p.categories, c => c === idCategory);

          if (categoryFound) {
            postsFiltered.push(new Post(p));
          }
        });

        return postsFiltered;
       })
     );
  }

  getPostsByName(value: string): Observable<IPost[]> {
    return this.getPosts().pipe(
      map(posts => {

       const postsFiltered = [];

       _.forEach(posts, p => {

         if (p.title.toLowerCase().includes(value.toLowerCase())) {
           postsFiltered.push(new Post(p));
         }
       });

       return postsFiltered;
      })
    );
  }

}

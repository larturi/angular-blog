import { Category } from 'src/app/models/category';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private afd: AngularFireDatabase
  ) {

  }

  public getCategories(): Observable<Category[]> {

    return this.afd.list<Category>('categories').valueChanges();
  }

  public addCategory(category: Category) {


    const postsRef = this.afd.database.ref('categories');

    const newCategory = postsRef.push();

    category.id = newCategory.key;

    const categoryRefId = this.afd.database.ref('categories/' + category.id);
    categoryRefId.set(category.getData());
  }

  public deleteCategories(ids: string[]) {

    _.forEach(ids, id => {
      this.afd.object('/categories/' + id).remove();
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/models/category';
import { Router } from '@angular/router';
import { ICategory } from '../../interfaces/icategory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showSearch: boolean = false;
  public categories: Category[] = [];

  constructor(
    public config: ConfigService,
    public categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(listCategories => {
      this.categories = listCategories;
    });
  }

  openInputSearch($event) {
    // Paro la propagacion de eventos
    $event.stopPropagation();
    this.showSearch = !this.showSearch;
  }

  searchPosts(search: string) {
    this.router.navigate(['/search', search]);
  }

  hideInputSearch() {
    this.showSearch = false;
  }

  showPosts(category: ICategory) {
    this.router.navigate(['/content', category.id]);
  }

}

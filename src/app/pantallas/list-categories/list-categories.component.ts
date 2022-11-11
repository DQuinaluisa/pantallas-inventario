import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ApiService } from 'src/app/Server/api.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories : any;
  category = new Category();

  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {
    this.api.getCategories().subscribe((res : any) => {
      //console.log(res)
      this.categories = res.data
     // console.log(this.categories)
    })

  }

}

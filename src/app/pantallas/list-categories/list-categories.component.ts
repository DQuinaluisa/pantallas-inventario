import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  page : any;
  spinner = true;
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getCategories().subscribe((res : any) => {
      //console.log(res)
      this.categories = res.data
      this.spinner = false
     // console.log(this.categories)
    })

  }

  selectCategories(id : string){
    this.router.navigate(["/edit-category/", id])
    console.log(id)
  }

}

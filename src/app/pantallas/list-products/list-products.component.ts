import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/Server/api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products : any;
  product = new Product();
  spinner = true;
  constructor(
    private api : ApiService,

  ) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((res : any) => {
      this.products = res['data']
      this.spinner = false;
      console.log(this.products)
    })

  }

  actualizarLista()
  {
    window.location.reload();
  }

}

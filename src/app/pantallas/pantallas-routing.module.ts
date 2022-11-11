import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [

  {
    path : '',
    children : [
      {
        path: '',
        component: ListProductsComponent
      }
    ]
  },


  {
    path: 'edit-products/:id',
    component: EditProductsComponent
  },
  {
    path: 'create-products',
    component: CreateProductsComponent
  },
  {
    path: 'list-categories',
    component: ListCategoriesComponent
  },
  {
    path: 'edit-category',
    component: EditCategoriesComponent
  },
  {
    path: 'create-category',
    component: CreateCategoriesComponent
  },
  {
    path: 'create-client',
    component: CreateClientsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallasRoutingModule { }

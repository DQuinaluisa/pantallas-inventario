import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ExitProductsComponent } from './exit-products/exit-products.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesProductsComponent } from './sales-products/sales-products.component';

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
    path: 'edit-category/:id',
    component: EditCategoriesComponent
  },
  {
    path: 'create-category',
    component: CreateCategoriesComponent
  },
  {
    path: 'create-client',
    component: CreateClientsComponent
  },
  {
    path: 'edit-client/:id',
    component: EditClientsComponent
  },
  {
    path: 'list-client',
    component: ListClientsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'exit-products/:id',
    component: ExitProductsComponent
  },
  {
    path: 'sales-products',
    component: SalesProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallasRoutingModule { }

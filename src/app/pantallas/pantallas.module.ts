import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantallasRoutingModule } from './pantallas-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { CreateClientsComponent } from './create-clients/create-clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListProductsComponent,
    CreateProductsComponent,
    EditProductsComponent,
    CreateCategoriesComponent,
    ListCategoriesComponent,
    EditCategoriesComponent,
    CreateClientsComponent
  ],
  imports: [
    CommonModule,
    PantallasRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PantallasModule { }

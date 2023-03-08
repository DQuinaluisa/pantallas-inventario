import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-edit-sales',
  templateUrl: './edit-sales.component.html',
  styleUrls: ['./edit-sales.component.css']
})
export class EditSalesComponent implements OnInit {

  id : any
  sales_products : any
  product_id : any
  client_id : any
  productsId : any
  products : any
  clients : any
  sales : any
  constructor(
    private api : ApiService,
    private router : Router,
    private activeParams : ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.api.getClientes().subscribe((res : any) => {
      this.clients = res['data'];
      console.log(this.clients)
    });





    this.activeParams.params.subscribe(params => {
      this.id = params['id']
      //console.log(this.id)
      this.api.getSalesById(this.id).subscribe(
        (res : any) => {
          this.sales = res['data']
         console.log(this.sales)
          this.productsId = this.sales.product_id
          console.log(this.productsId)
         this.api.getProductsById(this.productsId).subscribe((res : any) => {
            this.products = res['data']
            console.log(this.products)
         })
        }
      )
    });


  }


  updateSales () {
    this.api.updateSales(this.id, this.sales).subscribe((data : any) => {
      console.log(data);
      Swal.fire({
        position : 'center',
        icon : 'warning',
        title : 'Venta Actualizado con Exito',
        showConfirmButton : false,
        timer: 1500
      });

      this.router.navigate(['list-products']);
    }, error => {
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo actualizar la Venta'
      })
      console.log(error);
    })
  }


}

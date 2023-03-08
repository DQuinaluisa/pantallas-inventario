import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-sales-products',
  templateUrl: './sales-products.component.html',
  styleUrls: ['./sales-products.component.css']
})
export class SalesProductsComponent implements OnInit {
  clients : any
  sales : any
  page : any
  spinner = true;
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getSalesProducts().subscribe((res : any) => {
      this.sales = res['data']
      this.clients = res['data2']
      this.spinner = false;
      console.log(this.sales, this.clients)

    })


  }

  selectedSales(id : string){
    this.router.navigate(["/sales-edit/", id])
    console.log(id)
  }


  deleteSales(id : string){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Seguro que quieres Eliminar',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Deseo Borrar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {

      if (result.isConfirmed) {
        this.api.deleteSales(id).subscribe((res) => {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Venta eliminada.',
            'success'
          )
          this.router.navigate(['list-products']);
        },error => {
          Swal.fire({

            icon : 'error',
            title : 'Ooops',
            text : 'No se pudo Eliminar la Venta'
          })
          console.log(error);
          this.router.navigate(['list-products']);
        })

      } else if (

        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu Venta se salvo :)',
          'error'
        )
        this.router.navigate(['sales-products']);
      }
    })
  }

}

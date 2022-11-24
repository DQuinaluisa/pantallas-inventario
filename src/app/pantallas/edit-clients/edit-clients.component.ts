import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {

  id : any
  name : any
  lastName : any
  ci : any
  address : any
  phone : any

  clients : any
  constructor(
    private api : ApiService,
    private router : Router,
    private activeParams : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeParams.params.subscribe((params : any) => {
      this.id = params['id']
      console.log(params)
      this.api.getClientsById(this.id).subscribe((res : any) => {
        this.clients = res['data']
        console.log(this.clients)
      })
    })
  }

  updateClientes () {
    this.api.updateClients(this.id, this.clients).subscribe((data : any) => {
      console.log(data);
      Swal.fire({
        position : 'center',
        icon : 'warning',
        title : 'Cliente Actualizado con Exito',
        showConfirmButton : false,
        timer: 1500
      });

      this.router.navigate(['list-client']);
    }, error => {
      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo actualizar '
      })
      console.log(error);
    })
  }

}

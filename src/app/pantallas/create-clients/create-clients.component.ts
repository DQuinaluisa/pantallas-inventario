import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinValidator, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { ApiService } from 'src/app/Server/api.service';
import  Swal  from 'sweetalert2';
@Component({
  selector: 'app-create-clients',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.css']
})
export class CreateClientsComponent implements OnInit {

  clientsForm : any = FormGroup;
  submitted = false;
  constructor(
    private api : ApiService
  ) { }

  ngOnInit(): void {
    this.clientsForm = new FormGroup({
      name : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      ci : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address : new FormControl('', Validators.required),
      phone : new FormControl('', Validators.required),
    });
  }

  get f() { return this.clientsForm.controls; }

  createCliente()
  {
    this.submitted = true;
    const form = this.clientsForm;
    if (this.clientsForm.invalid) {
      return;
  }



    this.api.createClients(form.value.name, form.value.lastName, form.value.ci, form.value.address, form.value.phone)
    .subscribe((data) => {

      this.clientsForm = new FormGroup({
        name : new FormControl(null),
        lastName : new FormControl(null),
        ci : new FormControl(null),
        address : new FormControl(null),
        phone : new FormControl(null),
      })
      Swal.fire({
        position : 'center',
        icon : 'success',
        title : 'Cliente Creado con Exito',
        showConfirmButton : false,
        timer: 1500
      })

    },
    error => {
      console.log(error);

      Swal.fire({

        icon : 'error',
        title : 'Ooops',
        text : 'No se pudo crear '
      })
    });

  }


}

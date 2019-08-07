import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.scss']
})
export class ReclamosComponent implements OnInit {

  table_header: any
  reclamosForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.table_header = [
      {
        id: 'N°',
        fecha: 'Fecha del Pedido',
      }
    ]
    this.formularioReclamos()
  }
  formularioReclamos(){
    this.reclamosForm = this.formBuilder.group({
      id: [''],
      fecha: [''],
      comentario:['']
    });
  }
}

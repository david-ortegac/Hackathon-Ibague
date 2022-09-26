import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Emergencia } from 'src/app/models/emergencia.model';
import { EmergenciaService } from 'src/app/services/emergencia.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  form: FormGroup;

  constructor(private emergenciaService: EmergenciaService) {
    this.form = new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
      lugar: new FormControl('', [Validators.required]),
      tipoEmergencia: new FormControl('', [Validators.required]),
      estado: new FormControl('sin verificar'),
      asignacion: new FormControl('sin asignar')
    });
  }

  ngOnInit(): void {
  }

  invalidForm: boolean = true;
  loading: boolean = false;
  onSubmit() {

    this.emergenciaService.createEmergency(this.form.value);

    this.form.reset();
  }

}

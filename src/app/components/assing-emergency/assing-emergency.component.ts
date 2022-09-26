import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmergenciaService } from 'src/app/services/emergencia.service';

@Component({
  selector: 'app-assing-emergency',
  templateUrl: './assing-emergency.component.html',
  styleUrls: ['./assing-emergency.component.css']
})
export class AssingEmergencyComponent implements OnInit {

  formEdit: FormGroup;

  emergenciaEdit: any;

  constructor(
    private route: ActivatedRoute,
    private emergenciaService: EmergenciaService
  ) {
    this.formEdit = new FormGroup({
      descripcion: new FormControl(''),
      lugar: new FormControl(''),
      tipoEmergencia: new FormControl(''),
      estado: new FormControl(''),
      asignacion: new FormControl(''),
      usuarioAsignado: new FormControl('', [Validators.required]),
      trazabilidad: new FormControl('', [Validators.required]),
    });
  }

  id: any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getEmergency(this.id);
    });
  }

  getEmergency(id:any) {
    this.emergenciaService.getEmergencyById(id).subscribe(res => {
      this.emergenciaEdit = res;
      this.formEdit.value.descripcion = this.emergenciaEdit.descripcion;
      this.formEdit.value.lugar = this.emergenciaEdit.lugar;
      this.formEdit.value.tipoEmergencia = this.emergenciaEdit.tipoEmergencia;
      this.formEdit.value.estado = "Asignado";
    })
  }

  updateEmergency() {
    this.emergenciaService.updateEmergency(this.formEdit.value, this.id).then(res => {
      console.log(res);
    });
  }

}

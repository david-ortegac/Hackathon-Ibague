import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { Emergencia } from 'src/app/models/emergencia.model';
import { EmergenciaService } from 'src/app/services/emergencia.service';
import { AssingEmergencyComponent } from '../assing-emergency/assing-emergency.component';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css']
})
export class EmergenciesComponent implements OnInit {

  emergencias: Emergencia[] = [];
  emergencia: any;

  constructor(
    private emergenciaService: EmergenciaService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.emergenciaService.getAllEmergencies().subscribe(res => {
      this.emergencias = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Emergencia)
        };
      });
    });
  }

  editEmergency(id: any) {
    this.route.navigate(['emergencies-asigned', id]);
  }

}

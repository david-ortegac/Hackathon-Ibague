import { Component, OnInit } from '@angular/core';
import { Emergencia } from 'src/app/models/emergencia.model';
import { EmergenciaService } from 'src/app/services/emergencia.service';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css']
})
export class EmergenciesComponent implements OnInit {

  emergencias: Emergencia[] = [];

  constructor(private emergenciaService: EmergenciaService) { }

  ngOnInit(): void {
    this.emergenciaService.getAllEmergencies().subscribe(res => {
      console.log(res);
      
      this.emergencias = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Emergencia)
        };
      });
    });
  }

}

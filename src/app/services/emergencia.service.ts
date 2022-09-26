import { Injectable } from '@angular/core';

//import modules from firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Emergencia } from '../models/emergencia.model';
import { Trazabilidad } from '../models/trazabilidad.model';

@Injectable({
  providedIn: 'root'
})
export class EmergenciaService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  getAllEmergencies() {
    return this.firestore.collection("emergencia").snapshotChanges();
  }

  getEmergencyById(id: any) {
    return this.firestore.collection("emergencia").doc(id).valueChanges();
  }

  createEmergency(data: Emergencia) {
    console.log(data)
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("emergencia")
        .add(data)
        .then((response) => {
          console.log(response)
        },
          (error) => {
            reject(error)
          })
    })
  }

  updateEmergency(emergencia: Emergencia, id: any) {
    return this.firestore
      .collection("emergencia")
      .doc(id)
      .update({
        /* lugar: emergencia.lugar,
        descripcion: emergencia.descripcion,
        tipoEmergencia: emergencia.tipoEmergencia, */
        estado: emergencia.estado,
        trazabilidad: emergencia.trazabilidad,
      });
  }


}

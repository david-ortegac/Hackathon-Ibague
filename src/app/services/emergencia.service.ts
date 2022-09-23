import { Injectable } from '@angular/core';

//import modules from firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Emergencia } from '../models/emergencia.model';

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

  createEmergency(emergencia: Emergencia) {
    return new Promise<Emergencia>((resolve, reject) => {
      this.firestore
      .collection("emergencia").add(emergencia)
        .then(res => {
        console.log(res);
        }, (error) => {
          reject(error);
      })
    })
  }

  updateEmergency(emergencia: Emergencia, id: any) {
    return this.firestore
      .collection("emergencia")
      .doc(id)
      .update({
        lugar: emergencia.lugar,
        descripcion: emergencia.descripcion,
        tipoEmergencia: emergencia.tipoEmergencia,
        estado: emergencia.estado
      });
  }


}

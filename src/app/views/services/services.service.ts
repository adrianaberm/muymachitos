import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private firestore: AngularFirestore) { }

  addQuestion(question:any): Promise<any>{
   return this.firestore.collection('tema-de-la-semana').add(question);
  }

  addPqr(pqr:any): Promise<any>{
    return this.firestore.collection('pqr').add(pqr);
  }

  getgrafica(): Observable<any>{
    return this.firestore.collection('grafica').snapshotChanges();
  }

  grafica(id: string): Observable<any> {
    return this.firestore.collection('grafica').doc(id).snapshotChanges();
  }

  actualziarGrafica(id: string, data: any): Promise<any>{
    return this.firestore.collection('grafica').doc(id).update(data);
  }
}

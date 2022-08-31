import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { environment } from './../../../environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  patient!: Patient;

  constructor(
    private httpClient: HttpClient
  ) { }

  getStaticPatient(){
    return this.patient;
  }

  setStaticPatient(patient: Patient){
    this.patient = patient;
  }

  getPatientsByName(name?: string){
    return this.httpClient.get(`${API}/patients?nick=${name}`)
  }

  getAllPatients(){
    return this.httpClient.get(`${API}/patients`)
  }

  deletePatient(patientId: number){
    return this.httpClient.delete(`${API}/patients/${patientId}`)
  }
}

import { Patient } from './../../public/models/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private httpClient: HttpClient
  ) { }

  postNewPatiante(patient?: Patient){
    return this.httpClient.post(`${API}/patients`, patient)
  }
}

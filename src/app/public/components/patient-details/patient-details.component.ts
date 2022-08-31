import { PublicService } from './../../services/public.service';
import { Patient } from './../../models/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {

  patient!: Patient;

  constructor(
    private publicService: PublicService
  ) { }

  ngOnInit(): void {
    this.patient = this.publicService.getStaticPatient();
  }

}

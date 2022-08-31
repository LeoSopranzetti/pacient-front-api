import { ActivatedRoute, Router } from '@angular/router';
import { PublicService } from './../../services/public.service';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Patient } from '../../models/patient';
import { catchError, debounceTime, switchMap, tap } from 'rxjs';

const WAIT_TYPE = 300;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  acoesInput = new FormControl('');
  patients: Patient[] = [];

  constructor(
    private publicService: PublicService ,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getAllPatients();

    this.acoesInput.valueChanges.pipe(

      debounceTime(WAIT_TYPE),

      switchMap(async (value: any) => {

      if(value !== ''){
        this.getPatiantsByName(value);
      } else {
        this.getAllPatients();
      }

    })).subscribe();

  }

  public getAllPatients(){

    this.publicService.getAllPatients().pipe(
      tap((res : any ) => {
        this.patients = res;
      }),
      catchError((error)=> {
        return error
      })
    ).subscribe()

  }

  public getPatiantsByName(name: any){

    this.publicService.getPatientsByName(name).pipe(
      tap((res : any ) => {
        this.patients = res;
      }),
      catchError((error)=> {
        return error
      })
    ).subscribe()

  }

  goToDetails(patient: Patient){
    this.publicService.setStaticPatient(patient);
    this.router.navigate(['details'], {relativeTo: this.activateRoute});
  }

  updateList(event: any){
    this.getAllPatients();
  }

}

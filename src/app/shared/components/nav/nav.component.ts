import { ModalSuccessComponent } from './../../modals/modal-success/modal-success.component';
import { tap, catchError } from 'rxjs';
import { SharedService } from './../../service/shared.service';
import { Patient } from './../../../public/models/patient';
import { ModalAddNewPatientComponent } from './../../modals/modal-add-new-patient/modal-add-new-patient.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLogged: boolean = false;
  patient!: Patient;

  constructor(
    private router : Router,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {

  }

  logout(){
    this.router.navigate(['']);
  }

  goToHome(){
    this.router.navigate(['home']);
  }

  addNewPatient(){
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }

    const dialogRef = this.dialog.open(ModalAddNewPatientComponent,  {
      maxWidth: '500px',
      data: { errorText: '' },
      panelClass: 'full-with-dialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.patient = result;
        this.sharedService.postNewPatiante(this.patient).pipe(
          tap((res  ) => {
            this.dialog.open(ModalSuccessComponent, {maxWidth: '450px'});
          }),
          catchError((error)=> {
            return error
          })
        ).subscribe()

      }
    });

  }

}

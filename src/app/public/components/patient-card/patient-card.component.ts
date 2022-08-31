import { tap, catchError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from './../../../shared/modals/modal-confirm/modal-confirm.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicService } from './../../services/public.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBowlFood, faCakeCandles, faCity, faCoins, faLocationDot, faMap, faPersonBreastfeeding, faPersonHalfDress, faPhone, faSignature, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Patient } from '../../models/patient';

@Component({
  selector: 'patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent implements OnInit {

  faBowlFood = faBowlFood;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faMap = faMap;
  faCoins = faCoins;
  faStar = faStar;

  faCakeCandles = faCakeCandles;
  faUser = faUser;
  faPersonHalfDress = faPersonHalfDress;
  faCity = faCity;
  faSignature = faSignature;

  @Input() patient!: Patient;
  @Input() isDetails: boolean = false;
  @Output() updateList = new EventEmitter<boolean>();

  constructor(
    private publicService: PublicService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public goToDetails(patient: Patient){
    this.publicService.setStaticPatient(patient);
    this.router.navigate(['details'], {relativeTo: this.activateRoute});
  }

  public onDelete(patient: Patient){
    const dialogRef = this.dialog.open(ModalConfirmComponent, {maxWidth: '450px'});

    dialogRef.afterClosed().subscribe(result => {
      if(result === true){
        this.publicService.deletePatient(patient.id).pipe(
          tap((res ) => {
            this.updateList.emit(true);
          }),
          catchError((error)=> {
            return error
          })
        ).subscribe()
      }

    });
  }

  public goToHome(){
    this.router.navigate(['../'], {relativeTo: this.activateRoute});
  }

}

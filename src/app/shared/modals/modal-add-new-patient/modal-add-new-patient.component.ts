import { Patient } from './../../../public/models/patient';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-add-new-patient',
  templateUrl: './modal-add-new-patient.component.html',
  styleUrls: ['./modal-add-new-patient.component.scss']
})
export class ModalAddNewPatientComponent implements OnInit {

  newPatient!: FormGroup;
  patient!: Patient;

  constructor(
    public dialogRef: MatDialogRef<ModalAddNewPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.newPatient = this.formBuild();

  }

  public formBuild(){
    return this.formBuilder.group({
      nick: ['', [Validators.required]],
      name: ['', [Validators.required]],
      federalId: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mother: ['', [Validators.required]],
      father: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
    })
  }

  public onClick(boolean: boolean){
    if(boolean === true){
      this.patient = Object.assign(this.newPatient.value);
      this.dialogRef.close(this.patient);
    }else{
      this.dialogRef.close();
    }

  }

}

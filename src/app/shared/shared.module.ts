import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalAddNewPatientComponent } from './modals/modal-add-new-patient/modal-add-new-patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalSuccessComponent } from './modals/modal-success/modal-success.component';
import { ModalConfirmComponent } from './modals/modal-confirm/modal-confirm.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavComponent,
    ModalAddNewPatientComponent,
    ModalSuccessComponent,
    ModalConfirmComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports:[
    FooterComponent,
    NavComponent
  ]
})
export class SharedModule { }

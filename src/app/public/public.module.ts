import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { MatSliderModule } from '@angular/material/slider';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    HomeComponent,
    PatientCardComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    MatDialogModule
  ]
})
export class PublicModule { }

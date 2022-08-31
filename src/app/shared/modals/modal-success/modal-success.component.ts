import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.scss']
})
export class ModalSuccessComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  public onClick(){
    this.dialogRef.close();
  }

}

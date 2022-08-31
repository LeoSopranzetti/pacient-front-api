import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  public onClick(boolean: boolean){
    this.dialogRef.close(boolean);
  }

}

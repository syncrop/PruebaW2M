import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sure-dialog',
  templateUrl: './sure-dialog.component.html',
  styleUrls: ['./sure-dialog.component.scss']
})
export class SureDialogComponent implements OnInit {

  @Input() action:string="";

  constructor(
    public dialog: MatDialogRef<SureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string)
    { }

    cerrarDialogo(): void {
      this.dialog.close(false);
    }
    confirmado(): void {
      this.dialog.close(true);
    }

  ngOnInit() {
  }

}

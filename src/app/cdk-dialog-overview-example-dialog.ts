import {Component, Inject, Input} from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { DialogData } from './cdk-dialog-overview-example';


@Component({
  selector: 'cdk-dialog-overview-example-dialog',
  templateUrl: 'cdk-dialog-overview-example-dialog.html',
  styleUrls: ['cdk-dialog-overview-example-dialog.css'],
})

export class CdkDialogOverviewExampleDialog {
  isCancelClicked: boolean =true;
  constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: DialogData) {}
 
  onSubmit(formValue: any) {
    console.log(formValue);
    
  }
  onCancel(val: boolean){
    this.isCancelClicked=val;
   }
}

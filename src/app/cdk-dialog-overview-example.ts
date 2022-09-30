import { Component, ElementRef, EventEmitter, Inject, Input,OnInit,
  Output,
} from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';
import { CdkDialogOverviewExampleDialog } from './cdk-dialog-overview-example-dialog';

export interface DialogData {
  img: string;
}

/**
 * @title CDK Dialog Overview
 */
@Component({
  selector: 'cdk-dialog-overview-example',
  templateUrl: 'cdk-dialog-overview-example.html',
})
export class CdkDialogOverviewExample implements OnInit {
  public img: string | undefined;
  name = 'Demo';

  ngOnInit() {
    
  }
  @ViewChild('screen', { static: true }) screen: ElementRef<any>;


  constructor(
    public dialog: Dialog,
    private captureService: NgxCaptureService
  ) {}

  onSubmit(formValue: any) {
    console.log(formValue);
  }

  openDialog(): void {
    //loader start
    const dimensions = this.screen.nativeElement.getBoundingClientRect();
    this.captureService
    .getImage(this.screen.nativeElement, false, {
      width: dimensions.width,
      height: dimensions.height,
      useCORS: true,
    })
    .subscribe(result=>{
      //loader close
      const dialogRef = this.dialog.open<string>(CdkDialogOverviewExampleDialog, {

        width:'40%',height:'70%',
        data: { img: result },
      });
  
    });
    // const dialogRef = this.dialog.open<string>(CdkDialogOverviewExampleDialog, {
    //   data: { img: this.img },
    // });

    // // dialogRef.closed.subscribe((result) => {
    // //   this.img = result;
    // });
   
  }
}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { NgxCaptureModule } from 'ngx-capture';
import { CdkDialogOverviewExampleDialog } from './cdk-dialog-overview-example-dialog';
import { CdkDialogOverviewExample } from './cdk-dialog-overview-example';
// import { SpeechRecognitionService } from './speech-recognition.Service';



@NgModule({
  declarations: [CdkDialogOverviewExampleDialog,CdkDialogOverviewExample ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    NgxCaptureModule,
    ReactiveFormsModule,
    // SpeechRecognitionService,
    
  ],
  providers: [],
  bootstrap: [CdkDialogOverviewExample],
})
export class AppModule {}

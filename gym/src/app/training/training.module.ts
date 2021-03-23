import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { PastTrainingComponent } from './past-training/past-training.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [TrainingComponent, NewTrainingComponent, CurrentTrainingComponent, PastTrainingComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class TrainingModule { }







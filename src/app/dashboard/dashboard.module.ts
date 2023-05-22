import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreatesapComponent } from './createsap/createsap.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SAPmasterComponent } from './sapmaster/sapmaster.component';
import { PlannerComponent } from './planner/planner.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    DashboardComponent,
    CreatesapComponent,
    SAPmasterComponent,
    PlannerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDatepickerModule,  
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    ChartsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddElectionComponent } from './Components/AddElection/AddElection.component';
import { ElectionOptionComponent } from './Components/ElectionOption/ElectionOption.component';
import { LogInComponent } from './Components/LogIn/LogIn.component';
import { CompanyService } from './Services/company.service';
import { ElectionOptionService } from './Services/electionOption.service';
import { ElectionService } from './Services/election.service';
import { ElectionResult } from './Models/electionResult.model';
import { TypeService } from './Services/type.service';
import { VoterService } from './Services/voter.service';
import { SignUpComponent } from './Components/SignUp/SignUp.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/Home/Home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { HttpModule } from '@angular/http';
import { AddVotersComponent } from './Components/AddVoters/AddVoters.component';
import { MaterialModule } from './material.module';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { FlexLayoutModule } from "@angular/flex-layout";
import { ElectionComponent } from './Components/Election/Election.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MenuComponent } from './Components/Menu/Menu.component';
import { IdentifyVoterComponent } from './Components/IdentifyVoter/IdentifyVoter.component';
import { EditElectionComponent } from './Components/EditElection/EditElection.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Election } from './Models/election.model';
import { EmailService } from './Services/email.service';
import { EditElectionDetailsComponent } from './Components/EditElectionDetails/EditElectionDetails.component';
import { EditElectionOptionsComponent } from './Components/EditElectionOptions/EditElectionOptions.component';
import { EditVotersComponent } from './Components/EditVoters/EditVoters.component';
import { ResultsComponent } from './Components/Results/Results.component';
import { ChooseVoterComponent } from './Components/ChooseVoter/ChooseVoter.component';
import { VoterDetailsComponent } from './Components/VoterDetails/VoterDetails.component';
import { ValueToTypeService } from './Services/valueToType.service';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { ElectionResultService } from './Services/electionResult.service';
import { MatTabsModule } from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './Components/chart/chart.component';
import { PieComponent } from './Components/pie/pie.component';
import { TypeDetailsService } from './Services/typeDetails.service';
@NgModule({
  declarations: [
    AppComponent,
    ElectionComponent,
    AddElectionComponent,
    ElectionOptionComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    AddVotersComponent,
    MenuComponent,
    IdentifyVoterComponent,
    EditElectionComponent,
    EditElectionDetailsComponent,
    EditElectionOptionsComponent,
    EditVotersComponent,
    ResultsComponent,
    ChooseVoterComponent,
    VoterDetailsComponent,
    ChartComponent,
    PieComponent
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,
    MatFileUploadModule,
    NgbModule,
    MatCheckboxModule,
    MatTabsModule,
    ChartsModule
    
   ],

  providers: [
    CompanyService,
    ElectionOptionService,
    ElectionService,
    ElectionResult,
    TypeService,
    VoterService,
    Election,
    EmailService,
    ValueToTypeService,
    ElectionResultService,
    TypeDetailsService
    

    
  ],
    
  bootstrap: [AppComponent]
  
})

export class AppModule { }


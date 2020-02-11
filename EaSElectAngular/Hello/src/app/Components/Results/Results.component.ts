
import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { Election } from '../../Models/election.model';
import { ElectionOptionService } from '../../Services/electionOption.service';
import { ElectionResultService } from '../../Services/electionResult.service';
import { ResultOfOption } from '../../Models/resultOfOption';
import { ChartComponent } from '../chart/chart.component';
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from '../../Services/election.service';
import { Type } from '../../Models/type.model';
import { TypeService } from '../../Services/type.service';
 
@Component({
    selector: 'app-Results',
    templateUrl: './Results.component.html',
    styleUrls: ['./Results.component.css']
  })
  
  export class ResultsComponent {
    electionResults:Election=new Election()
    electionName:string
    resultOfOption:ResultOfOption[]
    types:Type[]
    selectedType:Type=new Type()
     constructor(private route:ActivatedRoute,private electionService:ElectionService,private typeService:TypeService,
      private electionOptionService:ElectionOptionService,private electionResultService:ElectionResultService){
    }
   ngOnInit(){
    sessionStorage.setItem('enter','3');

    this.route.params.subscribe(e=>
      {
        console.log(e.id)
         this.electionResults.ElectionId=e.id;
         if(sessionStorage.getItem('electionResult')!=e.id)
         {
            sessionStorage.setItem('electionResult',e.id.toString())
         }
      console.log(this.electionResults)    
      })
    this.getResult();
    this.getElectionName();
    this.getTypes();
     }
    
     getResult(){
      this.electionResultService.GetResult(this.electionResults.ElectionId).subscribe(list=>
        {
          this.resultOfOption=list;
        })
     }
     getElectionName(){
      this.electionService.GetElectionByCode(this.electionResults.ElectionId).subscribe(election=>{
        this.electionName=election.ElectionName;
      })
     }
     getTypes(){
      this.typeService.Get().subscribe(typeList=>
        {
          this.types=typeList;
          console.log(this.types)
          this.selectedType=new Type()
          this.selectedType=this.types[0]
          console.log(this.selectedType)
        })
    }

    selectType(type:Type)
    {
      this.selectedType=new Type()
      console.log(type)
      this.selectedType=type
    } 
  }

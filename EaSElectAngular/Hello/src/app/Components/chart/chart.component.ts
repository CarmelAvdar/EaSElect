import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ResultOfOption } from '../../Models/resultOfOption';
import { Type } from '../../Models/type.model';
//import { TypeDetailsService } from '../../Services/typeDetails.service';
import { TypeDetails } from '../../Models/typeDetails.model';
import { TypeDetailsService } from '../../Services/typeDetails.service';
import { ElectionResultService } from '../../Services/electionResult.service';
import { ResultOfOptionByTypeDetails } from '../../Models/ResultOfOptionByTypeDetails.model';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,OnChanges {
 
 


 @Input() type:Type
 @Input() options:ResultOfOption[]
 selectedType:Type
 resultOfOptionList:ResultOfOption[]
 resultOptionByType: ResultOfOption[]=[]
  index:number=0
  counter:number=0

   resultOfOptionByTypeDetails:ResultOfOptionByTypeDetails[]
 public typeDetailsList:TypeDetails[]

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [{data:[],label:""}];
  flag=true;
public chartColor:Color[]
  constructor(private typeDetailsService:TypeDetailsService,private electionResultService:ElectionResultService) { }

   
  ngOnChanges(changes: SimpleChanges): void {
   
    if(('type' in changes||'options' in changes)&&this.counter!=0)
         {
         
           this.ngOnInit();  
         
           
         }
   
  }
  ngOnInit() {
   
    
    this.counter++;
    this.index=0;
    console.log(this.counter)
    this.chartColor=[
    { backgroundColor:'red'},
    {backgroundColor:'blue'},
    {backgroundColor:'green'},
    {backgroundColor:'yellow'},
    {backgroundColor:'pink'},
    {backgroundColor:'orange'},
    {backgroundColor:'purple'},
    {backgroundColor:'brown'},
    {backgroundColor:'aqua'},
    {backgroundColor:'blueviolet'},
    {backgroundColor:'chartreuse'},
    {backgroundColor:'chocolate'},
    {backgroundColor:'darksalmon'},
    {backgroundColor:'deepink'},
    {backgroundColor:'gold'},
    {backgroundColor:'red'},
    {backgroundColor:'blue'},
    {backgroundColor:'green'},
    {backgroundColor:'yellow'},
    {backgroundColor:'pink'},
    {backgroundColor:'orange'},
    {backgroundColor:'purple'},
    {backgroundColor:'brown'},
    {backgroundColor:'aqua'},
    {backgroundColor:'blueviolet'},
    {backgroundColor:'chartreuse'},
    {backgroundColor:'chocolate'},
    {backgroundColor:'darksalmon'},
    {backgroundColor:'deepink'},
    {backgroundColor:'gold'}
  
  ];
    this.barChartData=[{data:[],label:""}];
   
    this.changeType()
   }


   
   changeType()
   {
    
    this.selectedType=this.type;
    console.log(this.selectedType)
    this.resultOfOptionList= this.options
    
    this.barChartData=[{data:[],label:""}];
    this.barChartLabels=[]
    for(let i=0;i<this.resultOfOptionList.length;i++)
     {
      this.barChartLabels[i]=this.resultOfOptionList[i].ElectionOptionName
     }
   
    //???????? ???? ???????? ?????????? ???? ?????????? ??????????
    this.typeDetailsService.Get(this.selectedType.TypeId).subscribe(typeDetailsList1=>
      {
       this.typeDetailsList=typeDetailsList1
      });
     
     this.electionResultService.GetResultByType(this.selectedType.TypeId,this.resultOfOptionList).subscribe(result=>
      {
      
        for(let i=0;i<result.length;i++)
           {
            this.barChartData[this.index++]={data:result[i].AmountTypeOfOption,label:result[i].TypeDetail.TypeDetailsName,backgroundColor:this.chartColor[i].backgroundColor}
           }
     
      })
    
   }  
}

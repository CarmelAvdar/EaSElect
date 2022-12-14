import { Component, ChangeDetectorRef } from '@angular/core';
import { Model, ToDoItem } from './model';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(private titleService:Title){
  this.titleService.setTitle("EaSElect");
}
  ngOnInit()
  {
   sessionStorage.setItem('enter','1');
  }

  getCompanyId(){
    return sessionStorage.getItem('companyId')
   
  }
  getEnter(){
    return sessionStorage.getItem('enter')
   
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css']
})
export class InterComponent implements OnInit {
  _employeeForm:FormGroup;
  positions=[];
  data={
        "position":"",
         "status":"",
         "region":"",
         "children":[]
  }
  constructor(fb:FormBuilder) {
    
   }

  

   create(data){
     console.log(data);
     console.log(data.position); 
   }
  ngOnInit() {
  }

}

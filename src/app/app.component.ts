import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, interval, Observable, pipe } from 'rxjs';
pipe
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
orgData:any;
 
  constructor(private http:HttpClient){
    this.http.get("./assets/data.json").subscribe((x)=>{
        this.orgData=x;
    })
   setInterval(()=>{
    this.http.get("./assets/data.json").subscribe((x)=>{
        this.orgData=x;
    }); 
   },1000*60*30)
  }
}

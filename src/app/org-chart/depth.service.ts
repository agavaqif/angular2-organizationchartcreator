import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepthService {
  data:any;
  constructor(private http:HttpClient) {
      http.get("./assets/data.json").subscribe((x)=>{
          this.data=x;
      })

   }

 
    public getJSON(): Observable<any> {
      return this.http.get("./assets/data.json")
  }
  

   bfs(data){
    data=data[0];   
    let result=[1,data.children.length];
    let q=data.children;
    while(q.length>0){
        let temp=[];
        let sum=0;
        for(let i in q){
            if(q[i].children.length>0){
                sum+=q[i].children.length;
            }else{
                sum++
            }
            q[i].children.forEach((item)=>{
                temp.push(item);
            })
        };
        q=temp;
        result.push(sum);
    }
  
    return [Math.max.apply(null,result),result.length-1];
    
}



    
}

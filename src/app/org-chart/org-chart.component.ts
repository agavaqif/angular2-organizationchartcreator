import { Component, OnInit, Input } from '@angular/core';
import { DepthService } from './depth.service';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {
  @Input() organization:any;
  info:any;
  width:number;
  height:number;
  margin:number

  constructor( private depthService:DepthService) {
   }

  ngOnInit() {
   this.depthService.getJSON().subscribe(data => {
    
    this.info=this.depthService.bfs(data);
    this.margin=screen.width/(2*this.info[1]+this.info[0]-2)*10;
    console.log(this.margin);
    this.width=Math.floor((screen.width-2*this.info[1]*10-(this.info[0]-2)*10)/(this.info[0]+1));
    this.height=this.width*0.61;
  });
  }
  trackByFn(index, item) {
    return index; // or item.id
  }


}

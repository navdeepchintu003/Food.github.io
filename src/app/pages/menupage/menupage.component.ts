import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit{
  constructor(private param:ActivatedRoute,private service:OrderDetailsService){}
  getMenuid:any;
  menuData:any
  ngOnInit():void{
    this.getMenuid=this.param.snapshot.paramMap.get('id')
    console.log(this.getMenuid,'getmenu');
    if(this.getMenuid){
      this.menuData=this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuid;
      })
    }
    console.log(this.menuData,'menudata>>');

  }

}

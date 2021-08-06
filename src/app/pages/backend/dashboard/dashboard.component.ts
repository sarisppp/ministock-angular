import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public api:ProductService) { }


  dataProduct:any = []  

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: {})=>{
      console.log(data);
      this.dataProduct = data;
    })
  }

}

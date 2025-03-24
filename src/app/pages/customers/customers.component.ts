import { NgFor } from '@angular/common';
import { Component, resource,inject, OnDestroy } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-customers',
  imports: [NgFor],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnDestroy {
masterService=inject(MasterService);
  constructor(){
    
  this.masterService.searchString.subscribe((res:any)=>{
    debugger;
  });
  }
  customerList=resource({
    loader:()=>{
      return fetch('https://localhost:7039/customers')
      .then((result)=>result.json() as Promise<any[]>)
    }
  })
  ngOnDestroy(): void {
    this.masterService.searchString.next('');
  }
}

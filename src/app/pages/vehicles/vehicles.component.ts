import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { MasterService } from '../../services/master.service';
@Component({
  selector: 'app-vehicles',
  imports: [FormsModule,NgIf,AsyncPipe],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent implements OnDestroy {
  vehicleFormData=signal({
    carId: 0,
    brand: "",
    model: "",
    year: 0,
    color: "",
    dailyRate: 0,
    carImage: "",
    regNo :""
  });
  modal: any;
  carList$:Observable<any[]>=new Observable<any[]>();
  isModalOpen = false;
http=inject(HttpClient);
  openModal() {
    this.isModalOpen = true;
  }
  masterService=inject(MasterService);
        
constructor(){
  this.carList$=this.http.get<any[]>('https://localhost:7039/cars');
  this.masterService.searchString.subscribe((res:any)=>{
  
  });

  //  this.carList$=this.http.get<any[]>('https://localhost:7039/cars')
  //  .pipe(map<any,any>(res=>{
  //   return  res.data;
  //  }
  // ));
}
  closeModal() {
    this.isModalOpen = false;
  }

  resetForm() {
   debugger;
   this.vehicleFormData().regNo;

  }
  updateForm(key:string,event:any){
    debugger;
    this.vehicleFormData.update((data:any)=>({...data,[key]:event.target.value}))
  }
  onSave(){
  this.http.post('https://localhost:7039/cars',this.vehicleFormData()).
  subscribe((res:any)=>{
    debugger;
   if(res)
    {
      this.isModalOpen=false;
    alert('vehicle created success fully');
   }
   else
   {
    alert(res.error);
   }
  });
  }
  ngOnDestroy(): void {
    this.masterService.searchString.next('');
  }

}

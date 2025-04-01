import { Component,ElementRef,inject, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
@ViewChild("searchText") searchText:ElementRef | undefined  
masterService=inject(MasterService);
  constructor(private routr:Router){
    this.masterService.searchString.subscribe((res:any)=>{
      if(res==''){
        if (this.searchText && this.searchText.nativeElement) {
          this.searchText.nativeElement.value = "";
        }
      }
    });
  }
  onlogoutclick(){
    localStorage.removeItem('token');
    this.routr.navigate(['']);
  }
onchange(event:any)
  {
    debugger;
      this.masterService.searchString.next(event.target.value);
  }
}

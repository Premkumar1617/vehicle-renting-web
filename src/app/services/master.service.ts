import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  searchString:Subject<string>=new Subject<string>();
  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 http=inject(HttpClient)
  constructor() { }
  logIn(userName:string,passWord:string):Observable<any>
  {
    const body={Code:userName,passWord:passWord};
   return this.http.post<any>(environment.apiUrl+"Auth",body);
  }
}

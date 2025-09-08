import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EndPointController, Result, ResultData } from "../../core/tools";
import { environment } from "../../../environments/environment";
import { UserAccount as CoreUserAccount } from "./userAccount";
import { UserAccount } from "../../entities/base/userAccount";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient = inject(HttpClient)) { }

  login(userAccount: CoreUserAccount): Observable<ResultData<UserAccount>> {
    let url: string = environment.baseUrl + '/Authenticate';
    return this.httpClient.post<ResultData<UserAccount>>(url, userAccount, EndPointController.Options);
  }

  signup(userAccount: CoreUserAccount): Observable<Result> {
    let url: string = environment.baseUrl + '/signup';
    return this.httpClient.post<Result>(url, userAccount, EndPointController.Options);
  }

  isAuthenticated(): boolean {
    // Implement authentication check
    return false;
  }

}
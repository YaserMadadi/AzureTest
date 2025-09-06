import { lastValueFrom, map, Observable } from "rxjs";
import { EndPointController, ResultData } from "../../core/tools";
import { Menu, Menu_Service } from "../../entities/admin/menu";
import { Injectable } from "@angular/core";
import { environment } from "../../../environment/environment";

@Injectable({ providedIn: 'root' })
export class Menu_ExtendedService extends Menu_Service {

  constructor() {
    super();
  }

  LoadMenuByUserType(userTypeId: number) {
    var url = environment.baseUrl + `/Admin/Menu/LoadMenuByUserType/${userTypeId}`;
    var result$ = this.api_operation.http.get<ResultData<Menu[]>>(url, EndPointController.Options).pipe(
      map((res) => {
        return res.data;
      })
    );
    return result$;
  }
}
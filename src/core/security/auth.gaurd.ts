import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { MessageController } from "../tools/controller.message";
import { PermissionType } from "../tools/enum";
import { StorageController } from "../tools/controller.storage";
// import { Employee } from "../../app/Entities/HR/Employee/employee";
import { PermissionController } from "../tools/controller.permission";
import { UserType } from "../../app/entities/admin/userType";
import { UserAccount } from '../../app/entities/base/userAccount';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    static Router: Router;

    constructor(private router: Router = inject(Router)) {
        AuthGuard.Router = router;
        //StorageController.Clear();
    }

    public static get UserType(): UserType {
        if (this.UserAccount.userType?.id == 0) {
            console.log("User Type is null");
            //return new UserType(1);
            this.UserAccount.userType.id = 2;
        }
        return this.UserAccount.userType!;
    }

    public static UserAccount: UserAccount = new UserAccount();

    public static BusinessOwnerProfile_Id: number = 0;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!AuthGuard.IsAuthenticated) {
            this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        if (route.url.length > 0) {
            return this.IndexPermitted(state);
        }
        return true;
    }

    private IndexPermitted(path: RouterStateSnapshot): boolean {
        return this.checkIndexPermission(AuthGuard.urlToArray(path.url));
    }

    /// Check IndexView Page Permission in Client Side
    private checkIndexPermission(segments: string[]): boolean {
        //return true;
        console.log('segments : ', segments);
        if (segments.length === 0 ||
            (segments.length === 1 && segments[0].toLowerCase().includes('home')) ||
            (segments.length === 2 && segments[0].toLowerCase().includes('home')))
            return true;
        let destUrl = segments.length >= 2 ? `/${segments[0]}/${segments[1]}` : '/unSpecified/unSpecified';
        for (const rolePermission of PermissionController.RolePermissionList) {
            if (destUrl.toLowerCase() != rolePermission.entity.indexUrl.toLowerCase())
                continue;
            if (rolePermission.viewIndexPermission) {
                return true;
            }
        }

        console.log(`Permission Denied for ${segments[0]}.${segments[1]}`);
        MessageController.ShowMessageByPermissionType(PermissionType.ViewIndexPermission);
        return false;
    }

    public static urlToArray(url: string): string[] {
        return url.split('/').filter(item => item.length !== 0);
    }

    // public get IsAuthenticated(): boolean {
    //     AuthGuard.IsAuthenticated = AuthGuard.UserName?.length > 0;
    //     return AuthGuard.IsAuthenticated;
    // }


    public static get IsAuthenticated(): boolean {
        return StorageController.Token?.length > 0;
    }


    public get IsAuthenticated(): boolean {
        return AuthGuard.IsAuthenticated;
    }


    //public static IsAuthenticated: boolean;

    public static Clear() {
        StorageController.Clear();
        //this.IsAuthenticated = false;
        //AuthGuard.Staff_Id = 0;
        AuthGuard.BusinessOwnerProfile_Id = 0;
        AuthGuard.Router.navigate(['login']);
        //PermissionManager.RolePermissionList = []
        //AuthGuard.navigate();
    }

    public static navigate(url: string) {
        AuthGuard.Router.navigate([url]);
    }

    public static SignOut() {
        AuthGuard.Clear();
    }
}
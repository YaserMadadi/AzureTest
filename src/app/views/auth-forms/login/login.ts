import { Component, inject } from "@angular/core";
import { CarouselItem } from "../../common-views/index-view/banner-hero/Item/carousel-item";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../auth-service";
import { UserAccount as coreUserAccount } from "../userAccount";
import { lastValueFrom } from "rxjs";
import { AuthGuard } from "../../../core/security/auth.gaurd";
import { UserAccount } from "../../../entities/base/userAccount";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"],
  imports: [
    CarouselItem,
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class LoginComponent {
  // Component logic goes here
  constructor(private router: Router = inject(Router), private authService: AuthService = inject(AuthService)) {
    this.userAccount.email = 'yass.madadi@gmail.com';
    this.userAccount.password = '123';
  }

  userAccount: coreUserAccount = new coreUserAccount();

  login() {
    lastValueFrom(this.authService.login(this.userAccount)).then(result => {
      console.log(result);
      if (result.isSucceeded) {
        AuthGuard.UserAccount = result.data ?? new UserAccount();
        console.log('Logged in user:', AuthGuard.UserAccount);
        this.router.navigate(['/layout/account/user-dashboard']);
      }
    });
  }

}

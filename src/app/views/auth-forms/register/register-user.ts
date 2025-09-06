import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { CarouselItem } from "../../common-views/index-view/banner-hero/Item/carousel-item";
import { AuthService } from "../auth-service";
import { lastValueFrom, map } from "rxjs";
import { UserAccount } from "../userAccount";

@Component({
  selector: 'register-user',
  templateUrl: './register-user.html',
  styleUrls: ['./register-user.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CarouselItem
  ]
})
export class RegisterUserComponent {

  constructor(private router: Router = inject(Router), private authService: AuthService = inject(AuthService)) { }

  userAccount: UserAccount = new UserAccount();

  registerUser() {
    this.userAccount.userType_id = 4; // Pet Owner
    console.log(this.userAccount);
    let r = lastValueFrom(this.authService.signup(this.userAccount)).then(result => {
      console.log(result);
      if (result.isSucceeded) {
        // Navigate to the login page or show a success message
        this.router.navigate(['/register/completed']);
      }
    });
  }
}

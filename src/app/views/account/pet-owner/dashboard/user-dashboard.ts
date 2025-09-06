import { Component, inject } from "@angular/core";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item";
import { UserAccount_Service, UserAccount_ServiceCollection } from "../../../../entities/base/userAccount";
import { Client, Client_Service, Client_ServiceCollection } from "../../../../entities/base/client";
import { AuthGuard } from "../../../../core/security/auth.gaurd";
import { lastValueFrom } from "rxjs";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ClientWallet_Service } from "../../../../entities/fund/clientWallet";
import { Pet, Pet_Service } from "../../../../entities/base/pet";

@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.scss'],
  imports: [
    DashboardItemComponent,
    FormsModule,
    CommonModule
  ]
})
export class UserDashboardComponent {

  private userAccountCollectionService!: UserAccount_ServiceCollection;
  private userAccountService!: UserAccount_Service;
  private clientService!: Client_Service;
  private clientServiceCollection!: Client_ServiceCollection;
  private clientWalletService!: ClientWallet_Service;
  private petService!: Pet_Service;

  constructor() {
    this.userAccountCollectionService = inject(UserAccount_ServiceCollection);
    this.userAccountService = inject(UserAccount_Service);
    this.clientService = inject(Client_Service);
    this.clientServiceCollection = inject(Client_ServiceCollection);
    this.clientWalletService = inject(ClientWallet_Service);
    this.petService = inject(Pet_Service);
  }

  ngOnInit() {
    this.loadClient();
  }

  client: Client = new Client();
  pets: Pet[] = [];

  async loadClient() {
    console.log('Loading user data for user ID:', AuthGuard.UserAccount.id);
    var clientList = await lastValueFrom(this.userAccountCollectionService.CollectionOfClient(AuthGuard.UserAccount.id));
    console.log('Client List : ', clientList);
    if (clientList && clientList.length > 0) {
      this.client = clientList[0];
      console.log('Loaded client data:', this.client);

      const [pets, wallet] = await Promise.all(
        [
          this.loadPets(),
          this.loadWallet()
        ]
      );
    }

  }

  async loadPets() {
    var petList = await lastValueFrom(this.clientServiceCollection.CollectionOfPet(this.client.id));
    this.client.listOfPet = petList;
    console.log('Pets : ', this.client.listOfPet);
  }


  async loadWallet() {
    var wallet = await lastValueFrom(this.clientServiceCollection.CollectionOfClientWallet(this.client.id));
    this.client.listOfClientWallet = wallet;
    console.log('Wallet : ', this.client.listOfClientWallet);
  }
}

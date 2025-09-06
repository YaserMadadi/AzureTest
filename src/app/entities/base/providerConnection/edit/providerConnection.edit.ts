

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ProviderConnection, ProviderConnection_Service } from '..';
import { ConnectionType } from '../../connectionType';
import { Provider } from '../../provider';



@Component({
  selector: 'base-providerConnection-edit',
  templateUrl: './providerConnection.edit.html',
  styleUrls: ['./providerConnection.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ProviderConnectionEditUI extends EditUI<ProviderConnection> {
    
  constructor(public override service: ProviderConnection_Service = inject(ProviderConnection_Service )) {
    super(service); 
    this.connectionTypeLinker = new ForeignkeyLinker<ConnectionType>(this.service.connectionTypeService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
  }

  @Input() 
  set connectionTypeLocked(value: boolean) {
    this.connectionTypeLinker.locked = value;
  }

	@Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

  public connectionTypeLinker: ForeignkeyLinker<ConnectionType>;

	public providerLinker: ForeignkeyLinker<Provider>;

}

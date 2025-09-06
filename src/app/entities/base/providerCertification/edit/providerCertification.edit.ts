

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal';
import { LookupComponent, EditButtons } from '../../../../../core/ui/components';
import { ForeignkeyLinker } from '../../../../../core/ui/helper';
import { EditUI } from '../../../../../core/ui/baseUI';

import { ProviderCertification, ProviderCertification_Service } from '..';
import { Certification } from '../../certification';
import { Provider } from '../../provider';



@Component({
  selector: 'base-providerCertification-edit',
  templateUrl: './providerCertification.edit.html',
  styleUrls: ['./providerCertification.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    LookupComponent,
    EditButtons,
  ]
})
export class ProviderCertificationEditUI extends EditUI<ProviderCertification> {
    
  constructor(public override service: ProviderCertification_Service = inject(ProviderCertification_Service )) {
    super(service); 
    this.certificationLinker = new ForeignkeyLinker<Certification>(this.service.certificationService, true);
		this.providerLinker = new ForeignkeyLinker<Provider>(this.service.providerService, true);
  }

  @Input() 
  set certificationLocked(value: boolean) {
    this.certificationLinker.locked = value;
  }

	@Input() 
  set providerLocked(value: boolean) {
    this.providerLinker.locked = value;
  }

  public certificationLinker: ForeignkeyLinker<Certification>;

	public providerLinker: ForeignkeyLinker<Provider>;

}

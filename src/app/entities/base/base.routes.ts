

import { Routes } from '@angular/router';

import { AuthGuard } from '../../../core/security/auth.gaurd';


export const base_routes : Routes = [
  
    { 
        path: 'acceptedpetcategory', 
        loadComponent: () => import('./acceptedPetCategory/hub/acceptedPetCategory.hub').then(m => m.AcceptedPetCategoryHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'AcceptedPetCategory' }  
    },
    {
        path: 'acceptedpetcategory/:id',
        loadComponent: () => import('./acceptedPetCategory/master/acceptedPetCategory.master').then(m => m.AcceptedPetCategoryMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'accountstatus', 
        loadComponent: () => import('./accountStatus/hub/accountStatus.hub').then(m => m.AccountStatusHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'AccountStatus' }  
    },
    {
        path: 'accountstatus/:id',
        loadComponent: () => import('./accountStatus/master/accountStatus.master').then(m => m.AccountStatusMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'backgroundcheckstatus', 
        loadComponent: () => import('./backgroundCheckStatus/hub/backgroundCheckStatus.hub').then(m => m.BackgroundCheckStatusHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'BackgroundCheckStatus' }  
    },
    {
        path: 'backgroundcheckstatus/:id',
        loadComponent: () => import('./backgroundCheckStatus/master/backgroundCheckStatus.master').then(m => m.BackgroundCheckStatusMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'bank', 
        loadComponent: () => import('./bank/hub/bank.hub').then(m => m.BankHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Bank' }  
    },
    {
        path: 'bank/:id',
        loadComponent: () => import('./bank/master/bank.master').then(m => m.BankMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'behaviorcategory', 
        loadComponent: () => import('./behaviorCategory/hub/behaviorCategory.hub').then(m => m.BehaviorCategoryHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'BehaviorCategory' }  
    },
    {
        path: 'behaviorcategory/:id',
        loadComponent: () => import('./behaviorCategory/master/behaviorCategory.master').then(m => m.BehaviorCategoryMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'booking', 
        loadComponent: () => import('./booking/hub/booking.hub').then(m => m.BookingHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Booking' }  
    },
    {
        path: 'booking/:id',
        loadComponent: () => import('./booking/master/booking.master').then(m => m.BookingMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'bookingservice', 
        loadComponent: () => import('./bookingService/hub/bookingService.hub').then(m => m.BookingServiceHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'BookingService' }  
    },
    {
        path: 'bookingservice/:id',
        loadComponent: () => import('./bookingService/master/bookingService.master').then(m => m.BookingServiceMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'bookingstatus', 
        loadComponent: () => import('./bookingStatus/hub/bookingStatus.hub').then(m => m.BookingStatusHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'BookingStatus' }  
    },
    {
        path: 'bookingstatus/:id',
        loadComponent: () => import('./bookingStatus/master/bookingStatus.master').then(m => m.BookingStatusMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'certification', 
        loadComponent: () => import('./certification/hub/certification.hub').then(m => m.CertificationHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Certification' }  
    },
    {
        path: 'certification/:id',
        loadComponent: () => import('./certification/master/certification.master').then(m => m.CertificationMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'certificationtype', 
        loadComponent: () => import('./certificationType/hub/certificationType.hub').then(m => m.CertificationTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'CertificationType' }  
    },
    {
        path: 'certificationtype/:id',
        loadComponent: () => import('./certificationType/master/certificationType.master').then(m => m.CertificationTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'certissuingorganization', 
        loadComponent: () => import('./certIssuingOrganization/hub/certIssuingOrganization.hub').then(m => m.CertIssuingOrganizationHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'CertIssuingOrganization' }  
    },
    {
        path: 'certissuingorganization/:id',
        loadComponent: () => import('./certIssuingOrganization/master/certIssuingOrganization.master').then(m => m.CertIssuingOrganizationMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'city', 
        loadComponent: () => import('./city/hub/city.hub').then(m => m.CityHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'City' }  
    },
    {
        path: 'city/:id',
        loadComponent: () => import('./city/master/city.master').then(m => m.CityMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'client', 
        loadComponent: () => import('./client/hub/client.hub').then(m => m.ClientHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Client' }  
    },
    {
        path: 'client/:id',
        loadComponent: () => import('./client/master/client.master').then(m => m.ClientMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'clientnotification', 
        loadComponent: () => import('./clientNotification/hub/clientNotification.hub').then(m => m.ClientNotificationHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ClientNotification' }  
    },
    {
        path: 'clientnotification/:id',
        loadComponent: () => import('./clientNotification/master/clientNotification.master').then(m => m.ClientNotificationMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'clientreview', 
        loadComponent: () => import('./clientReview/hub/clientReview.hub').then(m => m.ClientReviewHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ClientReview' }  
    },
    {
        path: 'clientreview/:id',
        loadComponent: () => import('./clientReview/master/clientReview.master').then(m => m.ClientReviewMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'connectiontype', 
        loadComponent: () => import('./connectionType/hub/connectionType.hub').then(m => m.ConnectionTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ConnectionType' }  
    },
    {
        path: 'connectiontype/:id',
        loadComponent: () => import('./connectionType/master/connectionType.master').then(m => m.ConnectionTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'country', 
        loadComponent: () => import('./country/hub/country.hub').then(m => m.CountryHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Country' }  
    },
    {
        path: 'country/:id',
        loadComponent: () => import('./country/master/country.master').then(m => m.CountryMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'durationunit', 
        loadComponent: () => import('./durationUnit/hub/durationUnit.hub').then(m => m.DurationUnitHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'DurationUnit' }  
    },
    {
        path: 'durationunit/:id',
        loadComponent: () => import('./durationUnit/master/durationUnit.master').then(m => m.DurationUnitMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'emailverification', 
        loadComponent: () => import('./emailVerification/hub/emailVerification.hub').then(m => m.EmailVerificationHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'EmailVerification' }  
    },
    {
        path: 'emailverification/:id',
        loadComponent: () => import('./emailVerification/master/emailVerification.master').then(m => m.EmailVerificationMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'enterpriseprovider', 
        loadComponent: () => import('./enterpriseProvider/hub/enterpriseProvider.hub').then(m => m.EnterpriseProviderHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'EnterpriseProvider' }  
    },
    {
        path: 'enterpriseprovider/:id',
        loadComponent: () => import('./enterpriseProvider/master/enterpriseProvider.master').then(m => m.EnterpriseProviderMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'enterpriseproviderinsurance', 
        loadComponent: () => import('./enterpriseProviderInsurance/hub/enterpriseProviderInsurance.hub').then(m => m.EnterpriseProviderInsuranceHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'EnterpriseProviderInsurance' }  
    },
    {
        path: 'enterpriseproviderinsurance/:id',
        loadComponent: () => import('./enterpriseProviderInsurance/master/enterpriseProviderInsurance.master').then(m => m.EnterpriseProviderInsuranceMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'gender', 
        loadComponent: () => import('./gender/hub/gender.hub').then(m => m.GenderHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Gender' }  
    },
    {
        path: 'gender/:id',
        loadComponent: () => import('./gender/master/gender.master').then(m => m.GenderMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'individualprovider', 
        loadComponent: () => import('./individualProvider/hub/individualProvider.hub').then(m => m.IndividualProviderHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'IndividualProvider' }  
    },
    {
        path: 'individualprovider/:id',
        loadComponent: () => import('./individualProvider/master/individualProvider.master').then(m => m.IndividualProviderMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'insurancetype', 
        loadComponent: () => import('./insuranceType/hub/insuranceType.hub').then(m => m.InsuranceTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'InsuranceType' }  
    },
    {
        path: 'insurancetype/:id',
        loadComponent: () => import('./insuranceType/master/insuranceType.master').then(m => m.InsuranceTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'locationcoverage', 
        loadComponent: () => import('./locationCoverage/hub/locationCoverage.hub').then(m => m.LocationCoverageHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'LocationCoverage' }  
    },
    {
        path: 'locationcoverage/:id',
        loadComponent: () => import('./locationCoverage/master/locationCoverage.master').then(m => m.LocationCoverageMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'medicationtype', 
        loadComponent: () => import('./medicationType/hub/medicationType.hub').then(m => m.MedicationTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'MedicationType' }  
    },
    {
        path: 'medicationtype/:id',
        loadComponent: () => import('./medicationType/master/medicationType.master').then(m => m.MedicationTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'notificationtype', 
        loadComponent: () => import('./notificationType/hub/notificationType.hub').then(m => m.NotificationTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'NotificationType' }  
    },
    {
        path: 'notificationtype/:id',
        loadComponent: () => import('./notificationType/master/notificationType.master').then(m => m.NotificationTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'pet', 
        loadComponent: () => import('./pet/hub/pet.hub').then(m => m.PetHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Pet' }  
    },
    {
        path: 'pet/:id',
        loadComponent: () => import('./pet/master/pet.master').then(m => m.PetMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'petbehavior', 
        loadComponent: () => import('./petBehavior/hub/petBehavior.hub').then(m => m.PetBehaviorHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'PetBehavior' }  
    },
    {
        path: 'petbehavior/:id',
        loadComponent: () => import('./petBehavior/master/petBehavior.master').then(m => m.PetBehaviorMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'petcategory', 
        loadComponent: () => import('./petCategory/hub/petCategory.hub').then(m => m.PetCategoryHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'PetCategory' }  
    },
    {
        path: 'petcategory/:id',
        loadComponent: () => import('./petCategory/master/petCategory.master').then(m => m.PetCategoryMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'petmedicalcondition', 
        loadComponent: () => import('./petMedicalCondition/hub/petMedicalCondition.hub').then(m => m.PetMedicalConditionHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'PetMedicalCondition' }  
    },
    {
        path: 'petmedicalcondition/:id',
        loadComponent: () => import('./petMedicalCondition/master/petMedicalCondition.master').then(m => m.PetMedicalConditionMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'phonenumberverification', 
        loadComponent: () => import('./phoneNumberVerification/hub/phoneNumberVerification.hub').then(m => m.PhoneNumberVerificationHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'PhoneNumberVerification' }  
    },
    {
        path: 'phonenumberverification/:id',
        loadComponent: () => import('./phoneNumberVerification/master/phoneNumberVerification.master').then(m => m.PhoneNumberVerificationMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'pricescope', 
        loadComponent: () => import('./priceScope/hub/priceScope.hub').then(m => m.PriceScopeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'PriceScope' }  
    },
    {
        path: 'pricescope/:id',
        loadComponent: () => import('./priceScope/master/priceScope.master').then(m => m.PriceScopeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'provider', 
        loadComponent: () => import('./provider/hub/provider.hub').then(m => m.ProviderHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Provider' }  
    },
    {
        path: 'provider/:id',
        loadComponent: () => import('./provider/master/provider.master').then(m => m.ProviderMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'providerbankaccount', 
        loadComponent: () => import('./providerBankAccount/hub/providerBankAccount.hub').then(m => m.ProviderBankAccountHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ProviderBankAccount' }  
    },
    {
        path: 'providerbankaccount/:id',
        loadComponent: () => import('./providerBankAccount/master/providerBankAccount.master').then(m => m.ProviderBankAccountMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'providercertification', 
        loadComponent: () => import('./providerCertification/hub/providerCertification.hub').then(m => m.ProviderCertificationHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ProviderCertification' }  
    },
    {
        path: 'providercertification/:id',
        loadComponent: () => import('./providerCertification/master/providerCertification.master').then(m => m.ProviderCertificationMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'providerconnection', 
        loadComponent: () => import('./providerConnection/hub/providerConnection.hub').then(m => m.ProviderConnectionHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ProviderConnection' }  
    },
    {
        path: 'providerconnection/:id',
        loadComponent: () => import('./providerConnection/master/providerConnection.master').then(m => m.ProviderConnectionMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'providerservice', 
        loadComponent: () => import('./providerService/hub/providerService.hub').then(m => m.ProviderServiceHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ProviderService' }  
    },
    {
        path: 'providerservice/:id',
        loadComponent: () => import('./providerService/master/providerService.master').then(m => m.ProviderServiceMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'providertype', 
        loadComponent: () => import('./providerType/hub/providerType.hub').then(m => m.ProviderTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ProviderType' }  
    },
    {
        path: 'providertype/:id',
        loadComponent: () => import('./providerType/master/providerType.master').then(m => m.ProviderTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'province', 
        loadComponent: () => import('./province/hub/province.hub').then(m => m.ProvinceHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Province' }  
    },
    {
        path: 'province/:id',
        loadComponent: () => import('./province/master/province.master').then(m => m.ProvinceMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'serviceorientedworktime', 
        loadComponent: () => import('./serviceOrientedWorkTime/hub/serviceOrientedWorkTime.hub').then(m => m.ServiceOrientedWorkTimeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ServiceOrientedWorkTime' }  
    },
    {
        path: 'serviceorientedworktime/:id',
        loadComponent: () => import('./serviceOrientedWorkTime/master/serviceOrientedWorkTime.master').then(m => m.ServiceOrientedWorkTimeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'serviceprice', 
        loadComponent: () => import('./servicePrice/hub/servicePrice.hub').then(m => m.ServicePriceHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ServicePrice' }  
    },
    {
        path: 'serviceprice/:id',
        loadComponent: () => import('./servicePrice/master/servicePrice.master').then(m => m.ServicePriceMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'servicetype', 
        loadComponent: () => import('./serviceType/hub/serviceType.hub').then(m => m.ServiceTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ServiceType' }  
    },
    {
        path: 'servicetype/:id',
        loadComponent: () => import('./serviceType/master/serviceType.master').then(m => m.ServiceTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'useraccount', 
        loadComponent: () => import('./userAccount/hub/userAccount.hub').then(m => m.UserAccountHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'UserAccount' }  
    },
    {
        path: 'useraccount/:id',
        loadComponent: () => import('./userAccount/master/userAccount.master').then(m => m.UserAccountMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'verificationstatus', 
        loadComponent: () => import('./verificationStatus/hub/verificationStatus.hub').then(m => m.VerificationStatusHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'VerificationStatus' }  
    },
    {
        path: 'verificationstatus/:id',
        loadComponent: () => import('./verificationStatus/master/verificationStatus.master').then(m => m.VerificationStatusMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'weekday', 
        loadComponent: () => import('./weekDay/hub/weekDay.hub').then(m => m.WeekDayHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'WeekDay' }  
    },
    {
        path: 'weekday/:id',
        loadComponent: () => import('./weekDay/master/weekDay.master').then(m => m.WeekDayMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'weightunit', 
        loadComponent: () => import('./weightUnit/hub/weightUnit.hub').then(m => m.WeightUnitHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'WeightUnit' }  
    },
    {
        path: 'weightunit/:id',
        loadComponent: () => import('./weightUnit/master/weightUnit.master').then(m => m.WeightUnitMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'worktime', 
        loadComponent: () => import('./workTime/hub/workTime.hub').then(m => m.WorkTimeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'WorkTime' }  
    },
    {
        path: 'worktime/:id',
        loadComponent: () => import('./workTime/master/workTime.master').then(m => m.WorkTimeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
];

//   ****    should be added into root.routes.ts
//  { path: 'Base', loadChildren: () => import('./entities/base/base.routes').then(x => x.base_routes) }
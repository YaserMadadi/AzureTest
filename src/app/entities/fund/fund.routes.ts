

import { Routes } from '@angular/router';

import { AuthGuard } from '../../../core/security/auth.gaurd';


export const fund_routes : Routes = [
  
    { 
        path: 'bookingtransaction', 
        loadComponent: () => import('./bookingTransaction/hub/bookingTransaction.hub').then(m => m.BookingTransactionHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'BookingTransaction' }  
    },
    {
        path: 'bookingtransaction/:id',
        loadComponent: () => import('./bookingTransaction/master/bookingTransaction.master').then(m => m.BookingTransactionMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'clientwallet', 
        loadComponent: () => import('./clientWallet/hub/clientWallet.hub').then(m => m.ClientWalletHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ClientWallet' }  
    },
    {
        path: 'clientwallet/:id',
        loadComponent: () => import('./clientWallet/master/clientWallet.master').then(m => m.ClientWalletMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'clientwallettransactionlog', 
        loadComponent: () => import('./clientWalletTransactionLog/hub/clientWalletTransactionLog.hub').then(m => m.ClientWalletTransactionLogHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ClientWalletTransactionLog' }  
    },
    {
        path: 'clientwallettransactionlog/:id',
        loadComponent: () => import('./clientWalletTransactionLog/master/clientWalletTransactionLog.master').then(m => m.ClientWalletTransactionLogMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'paymentmethod', 
        loadComponent: () => import('./paymentMethod/hub/paymentMethod.hub').then(m => m.PaymentMethodHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'PaymentMethod' }  
    },
    {
        path: 'paymentmethod/:id',
        loadComponent: () => import('./paymentMethod/master/paymentMethod.master').then(m => m.PaymentMethodMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'providerpayout', 
        loadComponent: () => import('./providerPayOut/hub/providerPayOut.hub').then(m => m.ProviderPayOutHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ProviderPayOut' }  
    },
    {
        path: 'providerpayout/:id',
        loadComponent: () => import('./providerPayOut/master/providerPayOut.master').then(m => m.ProviderPayOutMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'providerwallet', 
        loadComponent: () => import('./providerWallet/hub/providerWallet.hub').then(m => m.ProviderWalletHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'ProviderWallet' }  
    },
    {
        path: 'providerwallet/:id',
        loadComponent: () => import('./providerWallet/master/providerWallet.master').then(m => m.ProviderWalletMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'transactionstatus', 
        loadComponent: () => import('./transactionStatus/hub/transactionStatus.hub').then(m => m.TransactionStatusHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'TransactionStatus' }  
    },
    {
        path: 'transactionstatus/:id',
        loadComponent: () => import('./transactionStatus/master/transactionStatus.master').then(m => m.TransactionStatusMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'transactiontype', 
        loadComponent: () => import('./transactionType/hub/transactionType.hub').then(m => m.TransactionTypeHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'TransactionType' }  
    },
    {
        path: 'transactiontype/:id',
        loadComponent: () => import('./transactionType/master/transactionType.master').then(m => m.TransactionTypeMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
    { 
        path: 'wallettopup', 
        loadComponent: () => import('./walletTopUp/hub/walletTopUp.hub').then(m => m.WalletTopUpHubUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'WalletTopUp' }  
    },
    {
        path: 'wallettopup/:id',
        loadComponent: () => import('./walletTopUp/master/walletTopUp.master').then(m => m.WalletTopUpMasterUI),
        pathMatch: 'full',
        //canActivate: [AuthGuard], 
        data: { title: 'Menu' }
    },
    
];

//   ****    should be added into root.routes.ts
//  { path: 'Fund', loadChildren: () => import('./entities/fund/fund.routes').then(x => x.fund_routes) }
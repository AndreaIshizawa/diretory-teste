import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '/subpasta', loadChildren: () => import('./subpasta/subpasta.module').then( m => m.SubpastaModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
  
})


export class AppRouterModule {}
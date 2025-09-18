import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubpastaComponent } from './subpasta.component';
import { AppComponent } from '../app.component';

const route: Routes =  [
  { path: 'subpasta', component: SubpastaComponent },
  { path: '', component: AppComponent}
]

@NgModule({
  declarations: [
    SubpastaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports: [SubpastaComponent]
})
export class SubpastaModule { }

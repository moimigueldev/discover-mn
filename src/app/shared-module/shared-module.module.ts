import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickModule } from 'ngx-slick';
import { NgxSpinnerModule } from "ngx-spinner";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlickModule.forRoot(),
    NgxSpinnerModule
  ],
  exports: [
    SlickModule,
    NgxSpinnerModule
  ]
})
export class SharedModuleModule { }

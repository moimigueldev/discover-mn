import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickModule } from 'ngx-slick';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlickModule.forRoot()
  ],
  exports: [
    SlickModule
  ]
})
export class SharedModuleModule { }

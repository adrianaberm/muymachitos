import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
     HeaderComponent,
     ButtonComponent,
     FooterComponent,
     ModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }

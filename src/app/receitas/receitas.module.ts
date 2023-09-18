import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitasPageRoutingModule } from './receitas-routing.module';

import { ReceitasPage } from './receitas.page';
import { HeaderModule } from '../component/header/header.module';
import { ModalPageModule } from '../modal/modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitasPageRoutingModule,
    HeaderModule,
    ModalPageModule
  ],
  declarations: [ReceitasPage]
})
export class ReceitasPageModule {}

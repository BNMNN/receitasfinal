import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateReceitaPageRoutingModule } from './update-receita-routing.module';

import { UpdateReceitaPage } from './update-receita.page';
import { HeaderModule } from '../component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateReceitaPageRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  declarations: [UpdateReceitaPage]
})
export class UpdateReceitaPageModule {}

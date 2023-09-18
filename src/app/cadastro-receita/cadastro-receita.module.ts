import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroReceitaPageRoutingModule } from './cadastro-receita-routing.module';

import { CadastroReceitaPage } from './cadastro-receita.page';
import { HeaderModule } from '../component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroReceitaPageRoutingModule,
    HeaderModule,
    CadastroReceitaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroReceitaPage]
})
export class CadastroReceitaPageModule {}

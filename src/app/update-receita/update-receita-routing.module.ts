import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateReceitaPage } from './update-receita.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateReceitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateReceitaPageRoutingModule {}

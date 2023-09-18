import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'receitas',
    loadChildren: () => import('./receitas/receitas.module').then( m => m.ReceitasPageModule)
  },
  {
    path: 'modal/:id',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'cadastro-receita',
    loadChildren: () => import('./cadastro-receita/cadastro-receita.module').then( m => m.CadastroReceitaPageModule)
  },
  {
    path: 'update-receita/:id',
    loadChildren: () => import('./update-receita/update-receita.module').then( m => m.UpdateReceitaPageModule)
  }


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

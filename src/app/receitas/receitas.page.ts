import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { Router } from '@angular/router';
import { FirebaseService } from '../servico/firebase.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {

  isModalOpen = false;
  receita = {
      id: 0, 
      img: "", 
      nomeReceita:"", 
      ingredientes: "", 
      modoPre: ""

  }
  minhasReceitas:any[] = [];
   
  

  constructor(/* private modalControl: ModalController */ private firebaseService: FirebaseService, private loadingControl:LoadingController, private toast: ToastController, private router: Router, private modalControl: ModalController) { }

  ngOnInit(): void {
    /* Inicia o carregando */
    this.carregando();
    this.firebaseService.consulta().subscribe(results => this.minhasReceitas = results);
  }

  async carregando(){
    const load = this.loadingControl.create({
      mode: 'ios',
      message: 'Aguarde...',
      duration: 2000
    });
    (await load).present();
  }

  async mensagem(){
    const msg = this.toast.create({
      mode: 'ios',
      message: 'Item excluido com sucesso!',
      color: 'danger',
      position: 'top',
      duration: 2000
    }); 
    (await msg).present();
  }

  apaguei(id: any){
    this.firebaseService.excluir(id);
    this.modalControl.dismiss();
    /* Mensagem */
    this.mensagem();

  
  }

  modal_fim(){
    this.modalControl.dismiss();
  }

  /* async showModal(id: number){
    console.log();

    this.router.navigate(['/modal', id])
    const modal = await this.modalControl.create({
    component: ModalPage,
    componentProps:{
      
    }  
    });
    await modal.present();

    
  } */

 

  setOpen(isOpen: boolean, id: any) {
    this.isModalOpen = isOpen;
    for(let i=0; i<= this.minhasReceitas.length; i++){      

      if(id === this.minhasReceitas[i].id ){
        this.receita =  this.minhasReceitas[i];
      }
      
    }

  }
}

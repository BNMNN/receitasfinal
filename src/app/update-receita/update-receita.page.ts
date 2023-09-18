import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../servico/firebase.service';
import { ActivatedRoute,  Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-receita',
  templateUrl: './update-receita.page.html',
  styleUrls: ['./update-receita.page.scss'],
})
export class UpdateReceitaPage implements OnInit {

  form!:FormGroup;
  routerId = null;

  receita = {};
  
  constructor(private formBuilder: FormBuilder, private firebaseService: FirebaseService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   
    /* Instacia do metodo validaform */
    this.validaForm('');

    /* Capturar o id da rota */
    this.routerId = this.activateRouter.snapshot.params['id'];

    /* caso exista o id pega ele no banco de dados */
    if(this.routerId){
      this.firebaseService.consultaUm(this.routerId).subscribe(caixinha => this.validaForm(caixinha));
    }
  }

  validaForm(dados:any){
    this.form = this.formBuilder.group({
      nomeReceita: [dados.nomeReceita,[Validators.required]],
      ingredientes: [dados.ingredientes,[Validators.required]],
      modoPre: [dados.modoPre,[Validators.required]],
      img: [dados.img,[Validators.required]]
    })
  }

  updateButton(){
    this.firebaseService.editar(this.form.value,this.routerId);

    this.router.navigate(['/receitas']);
  }

}

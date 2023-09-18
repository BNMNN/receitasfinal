import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../servico/firebase.service';

@Component({
  selector: 'app-cadastro-receita',
  templateUrl: './cadastro-receita.page.html',
  styleUrls: ['./cadastro-receita.page.scss'],
})
export class CadastroReceitaPage implements OnInit {
  nomeReceita: string = '';
  ingredientes: string = '';
  modoPre: string = '';
  img: string = '';

  form!:FormGroup;

  constructor(private router: Router, private formBuilder:FormBuilder, private firebaseService: FirebaseService) {}

  ngOnInit() {
    /* Inicailizar o metodo validaForm */
    this.validaForm();
  }

  /*  Metodo de criação e validação do formulario */
  validaForm(){
    this.form = this.formBuilder.group({
      nomeReceita: ['',[Validators.required]],
      ingredientes: ['',[Validators.required]],
      modoPre: ['',[Validators.required]],
      img: ['',[Validators.required]]
    })
  }

  /* Metodo do botão do formulario */
  cadastroButton(){
    /* Usando o metodo de cadastro do nosso serviço HTTPCLIENT */
    //this.bancoDados.cadastro(this.form.value);

    /* Usando O SERVIÇO DO FIREBASE*/
    this.firebaseService.cadastro(this.form.value);
    this.router.navigate(['/receitas']);
    /* Navega para a pagina principal  */
    /* this.router.navigate(['/']); */
  }


}

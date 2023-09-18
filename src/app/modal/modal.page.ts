import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

 /*  @Input() */

  constructor(private modalControl: ModalController) { }

  ngOnInit() {
    
  }

  dismiss(){
    this.modalControl.dismiss();
  }

}

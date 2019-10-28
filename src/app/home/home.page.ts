import { Component } from '@angular/core';
import {Insomnia} from '@ionic-native/insomnia/ngx'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private insomnia:Insomnia) {}
  ionViewDidEnter(){
    this.insomnia.keepAwake()
    .then(
      ()=>{
        console.log("success");
      }
    ).catch(e=>{
        console.log("error",e);
    })
  }


  sleepAgain(){
    this.insomnia.allowSleepAgain();
  }
}

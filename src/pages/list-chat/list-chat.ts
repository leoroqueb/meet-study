import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-chat',
  templateUrl: 'list-chat.html',
})
export class ListChatPage {

  toUser : {toUserId: string, toUserName: string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toUser = {
      toUserId:'2',
      toUserName:'Santi'
    }
  }


}
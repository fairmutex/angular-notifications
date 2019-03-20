import { Component } from '@angular/core';
import { ToastProvider } from './toast/toast.provider';

import {Utilities} from './utilities/utilities';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Notifications System';
  
  constructor(private toastProvider: ToastProvider){
    const message = "I have some useful information for you...";
    this.toastProvider.sendMessage(message, 'danger',100000);


  }

  infoMessage() {
    const message = "Info Message";
    this.toastProvider.sendMessage(message, 'info');
  }

  successMessage() {
  const message = "Successful Message";
  this.toastProvider.sendMessage(message, 'success');
}

  cautionMessage() {
  const message = "Caution Message";
  this.toastProvider.sendMessage(message, 'caution');
}

  dangerMessage() {
  const message = "Danger Message";
  this.toastProvider.sendMessage(message, 'danger');
}

  randomMessage() {
  const message = "Random Message";
  this.toastProvider.sendMessage(message, Utilities.randomType());
}
}

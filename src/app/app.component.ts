import { Component } from '@angular/core';
import { ToastProvider } from './toast/toast.provider';

import { Utilities } from './utilities/utilities';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Notifications System';

  constructor(private toastProvider: ToastProvider) {
    this.randomMessage();
    this.randomMessage();
    this.randomMessage();
    this.randomMessage();
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
    const message = "Warning Message";
    this.toastProvider.sendMessage(message, 'warning');
  }

  dangerMessage() {
    const message = "Error Message";
    this.toastProvider.sendMessage(message, 'error');
  }

  randomMessage() {
    const message = Utilities.getRandomString(5); 
    this.toastProvider.sendMessage(message, Utilities.randomType(), Utilities.getRandomSeconds());
  }
}

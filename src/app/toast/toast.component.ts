import { Component, OnInit } from '@angular/core';
import { ToastProvider } from './toast.provider';
import { SVGProvider } from '../providers/svg.provider';

@Component({
  selector: 'toast-messages',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {

  messages: any;

  constructor(private toastProvider: ToastProvider,
    public _SVGProvider: SVGProvider) {

  }

  ngOnInit() {
    this.messages = this.toastProvider.getMessages()
  }

  dismiss(id) {
    this.toastProvider.dismissMessage(id)
  }

}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SVGProvider } from './providers/svg.provider';

import { ToastProvider } from './toast/toast.provider';
import { ToastComponent } from './toast/toast.component';
import {SanitizeHtmlPipe} from './pipes/sanitizeHtml.pipe';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    SanitizeHtmlPipe, 
    ToastComponent,
    ],
  bootstrap:    [ AppComponent ],
  providers: [
     SVGProvider,
     ToastProvider]
})
export class AppModule { }

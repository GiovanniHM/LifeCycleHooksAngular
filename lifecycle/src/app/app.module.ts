import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { NameshowComponent } from './components/nameshow/nameshow.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    NameshowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

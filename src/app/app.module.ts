import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { NewCardInputComponent } from './components/new-card-input/new-card-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

const rutas: Routes = [
  { path: '', component: IndexComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    NewCardInputComponent,
    ReadComponent,
    CreateComponent,
    ContactoComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
     tutorial: reducer
   }),
    RouterModule.forRoot(rutas),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { ContatoComponent } from './contato/contato.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './login/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routing';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'agenda', component: AddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    FormsModule,
    routing,
    RouterModule.forRoot (
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    AuthService,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

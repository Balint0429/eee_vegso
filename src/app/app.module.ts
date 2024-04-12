import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BiciklikComponent } from './biciklik/biciklik.component';
import { TermekComponent } from './termek/termek.component';

import { LoginComponent } from './login/login.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './verify/verify.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiciklikComponent,
    TermekComponent,
    RolunkComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

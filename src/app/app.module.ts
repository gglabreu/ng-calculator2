import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CalculatorService } from './services/calculator.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {TabViewModule} from 'primeng/tabview';

import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { CalculatorComponent } from './views/calculator/calculator.component';
import { OperatorPipe } from './pipes/operator.pipe';
import { UserComponent } from './views/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CalculatorComponent,
    OperatorPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    MessageModule, 
    TabViewModule
  ],
  providers: [AuthService, AuthGuard, CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

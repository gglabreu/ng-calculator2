import { CalculatorService } from './services/calculator.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './views/login/login.component';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './views/home/home.component';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterComponent } from './views/register/register.component';
import { CalculatorComponent } from './views/calculator/calculator.component';
import { FormsModule } from '@angular/forms'; 
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { OperatorPipe } from './pipes/operator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CalculatorComponent,
    OperatorPipe
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
    MessageModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

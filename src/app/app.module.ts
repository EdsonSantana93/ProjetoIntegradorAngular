import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';
import { FeedListComponent } from './feed-list/feed-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent } from './login/login.component';
import { AjudaComponent } from './ajuda/ajuda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RodapeComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    FeedListComponent,
    NotFoundComponent,
    AdministradorComponent,
    DetalheComponent,
<<<<<<< HEAD
    LoginComponent, 
=======
    LoginComponent,
>>>>>>> cc503cecb9091c6499632776019f3aa86644e34a
    AjudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

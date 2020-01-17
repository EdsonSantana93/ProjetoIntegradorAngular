import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: "sobre", component: SobreComponent},
  {path: "contato", component: ContatoComponent},
  {path: "", component: LoginComponent},
  {path: "Feed", component: FeedListComponent},
  {path: "administrador", component: AdministradorComponent},
  {path: "detalhe/:id", component: DetalheComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent} from './login/login.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { EditarComponent } from './editar/editar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { GtrofeusComponent } from './gtrofeus/gtrofeus.component';

const routes: Routes = [
  {path: "sobre", component: SobreComponent},
  {path: "contato", component: ContatoComponent},
  {path: "", component: LoginComponent},
  {path: "Feed", component: FeedListComponent},
  {path: "administrador", component: AdministradorComponent},
  {path: "detalhe", component: DetalheComponent},
  {path: "editar/:id", component: EditarComponent},
  {path: "ajuda", component: AjudaComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "trofeus", component: GtrofeusComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

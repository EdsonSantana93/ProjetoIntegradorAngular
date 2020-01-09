import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: "sobre", component: SobreComponent},
  {path: "contato", component: ContatoComponent},
  {path: "", component: FeedListComponent},
  {path: "#", component: FeedListComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

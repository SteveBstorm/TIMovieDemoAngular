import { DetailComponent } from './components/detail/detail.component';
import { ListeComponent } from './components/liste/liste.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "list", component : ListeComponent},
  {path : "detail/:id", component : DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

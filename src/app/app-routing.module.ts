import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'item-form',component:ItemFormComponent},
  {path:'item',component:ItemComponent},
  {path:'list',component:ListComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

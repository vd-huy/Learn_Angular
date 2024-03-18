import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './pages/addtask/addtask.component';
import { UpdatetaskComponent } from './pages/updatetask/updatetask.component';
import { GettasksComponent } from './pages/gettasks/gettasks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/gettasks' },
  {path: "addtask" , component: AddtaskComponent},
  {path: "updatetask" , component: UpdatetaskComponent},
  {path: "gettasks" , component: GettasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

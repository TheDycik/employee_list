import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
// import { DeleteComponent } from 'src/app/delete/delete.component';
import { AddingComponent } from 'src/app/adding/adding.component';
import { WorkerlistComponent } from './workerlist/workerlist.component';


const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "adding/:id", component: AddingComponent },
  { path: 'workerlist', component: WorkerlistComponent},
  // // { path: "delete", component: DeleteComponent }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AddingComponent } from './adding/adding.component';
import { WorkerComponent } from './worker/worker.component';
// import { DeleteComponent } from './delete/delete.component';
// import { ItemEditComponent } from './item-edit/item-edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WorkerlistComponent } from './workerlist/workerlist.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AddingComponent,
    WorkerComponent,
    WorkerlistComponent,

    // DeleteComponent,
    // ItemEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

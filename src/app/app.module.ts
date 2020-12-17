import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { EntidadeV1Component } from './entidade-v1/entidade-v1.component';

//Bootstrap
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    EntidadeV1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Flex
    //FlexLayoutModule,

    //Ng
    NgbModule,
    TreeviewModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

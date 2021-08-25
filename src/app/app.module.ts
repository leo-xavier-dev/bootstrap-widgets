import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { EntidadeV1Component } from './entidade-v1/entidade-v1.component';

//Bootstrap
import { TreeviewModule } from 'ngx-treeview';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Material
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { PromptComponent } from './prompt/prompt.component';
import { PwaService } from './services/pwa.service';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt ();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    EntidadeV1Component,
    LoginComponent,
    ProjectComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Flex
    //FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule,

    //Ng
    NgbModule,
    TreeviewModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,

    //Material
    MatBottomSheetModule

  ],  
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true},
  ],
  bootstrap: [AppComponent]

  
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from "./components/projects/project.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { HttpClientModule } from "@angular/common/http";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterProjectPipe } from './pipes/filter-project.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProjectComponent } from './components/projects/create-project/create-project.component';
import { FocusDirective } from './directives/focus.directive';
import { AuthLayoutComponent } from './components/layouts/auth/auth.component';
import { AuthComponent } from "./components/auth/auth.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectsComponent,
    GlobalErrorComponent,
    FilterProjectPipe,
    ModalComponent,
    CreateProjectComponent,
    FocusDirective,
    AuthComponent,
    AuthLayoutComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

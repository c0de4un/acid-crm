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
import { AuthComponent } from "./components/auth/auth.component";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { LabelComponent } from './components/form/label/label.component';
import { InputComponent } from './components/form/input/input.component';

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
    NotFoundComponent,
    DashboardComponent,
    AsideComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    CardComponent,
    LabelComponent,
    InputComponent
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

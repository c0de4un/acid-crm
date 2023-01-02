import { Component } from '@angular/core';
import { projects } from "./data/projects";
import { ModalService } from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACID CRM';
  projects = projects;

  constructor(
    public modalService: ModalService
  ) {
  }
}

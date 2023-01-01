import { Component } from '@angular/core';
import { projects } from "./data/projects";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACID CRM';
  projects = projects;
}

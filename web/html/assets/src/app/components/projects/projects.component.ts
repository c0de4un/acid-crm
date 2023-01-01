import { Component, Input } from "@angular/core";
import { IProject } from "src/app/models/project";

@Component({
  selector: 'acid-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  @Input() projects: IProject[] | undefined
}

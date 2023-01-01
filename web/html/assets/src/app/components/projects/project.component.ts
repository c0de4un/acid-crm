import { Component, Input } from "@angular/core";
import { IProject } from "src/app/models/project";
import { ProjectStateLabels } from "src/app/models/project.state";

@Component({
  selector: 'acid-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent {
  @Input() project: IProject
  isDetailed: boolean = false
  getStateLabel(state: number) : string | undefined {
    return ProjectStateLabels.get(state)
  }
}

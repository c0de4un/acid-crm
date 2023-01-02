import { Component, OnInit } from "@angular/core";
import { IProject } from "src/app/models/project";
import { ProjectService } from "../../services/project.service";
import { Observable, tap } from "rxjs";

@Component({
  selector: 'acid-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  term: string = ''
  isLoading: boolean = false
  projects$: Observable<IProject[]>

  constructor(private projectsService: ProjectService) {
  }

  ngOnInit(): void {
    this.isLoading = true

    this.projects$ = this.projectsService.getAll().pipe(
      tap(() => {
        this.isLoading = false
      })
    )
  }
}

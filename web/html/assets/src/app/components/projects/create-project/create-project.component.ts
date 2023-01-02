import { Component } from '@angular/core';
import { IProject } from "../../../models/project";
import { ProjectModel } from "../../../models/project.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'acid-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  model: IProject = new ProjectModel()

  form: FormGroup = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255)
    ])
  })

  get name(): FormControl {
    console.log('form.name=', this.form.controls.name)
    return this.form.controls.name as FormControl
  }

  onSubmit(): void {
    console.log('form.value=', this.form.value)
  }
}

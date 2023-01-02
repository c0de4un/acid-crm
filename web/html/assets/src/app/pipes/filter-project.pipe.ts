import { Pipe, PipeTransform } from '@angular/core';
import {IProject} from "../models/project";

@Pipe({
  name: 'filterProject'
})
export class FilterProjectPipe implements PipeTransform {

  transform(projects: IProject[], search: string): IProject[] {
    const search_lc: string = search.toLowerCase()

    return projects.filter(project => project.name?.toLowerCase().includes(search_lc))
  }

}

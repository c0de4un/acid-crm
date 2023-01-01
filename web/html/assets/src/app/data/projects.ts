import { IProject } from "../models/project";
import { EProjectStates } from "../models/project.state";

export const projects: IProject[] = [
  {
    id: 1,
    name: 'ACID CRM',
    state: EProjectStates.PLANNING,
    created_at: '2023-01-01',
    updated_at: '2023-01-01',
    closed_at: null,
  }
]

import { IProject } from "./project";

export class ProjectModel implements  IProject {
  closed_at: string | null;
  created_at: string | null;
  id: number | null;
  name: string | null;
  state: number;
  updated_at: string | null;
}

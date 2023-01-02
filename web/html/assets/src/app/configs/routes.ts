import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { AuthComponent } from "../components/auth/auth.component";
import { Route } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";

export const routes: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

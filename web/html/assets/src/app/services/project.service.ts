import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { ApiEndpoints } from "src/app/configs/api";
import {catchError, Observable, retry, throwError} from "rxjs";
import { IProject } from "../models/project";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root' // Automatically register in app.module providers
})
export class ProjectService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  public getAll(): Observable<IProject[]> {
    return this.http.get<IProject[]>(ApiEndpoints.api + '/projects/list', {
      params: new HttpParams().append('limit', 5)
        .append('page', 1)
    }).pipe(
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)

    return throwError(() => error.message)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface MonthlyUser {
  month: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportingService {
  private apiUrl = 'http://localhost:8080/api/monthly-user'; // Your backend endpoint

  constructor(private http: HttpClient) {}

  getMonthlyUsers(): Observable<MonthlyUser[]> {
    return this.http.get<MonthlyUser[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something went wrong; please try again later.');
  }
}

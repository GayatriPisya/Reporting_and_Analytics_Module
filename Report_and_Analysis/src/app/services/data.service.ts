import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080/api/data'; // Replace with actual endpoint

  constructor(private http: HttpClient) {}

  getHistoricalData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/historical`);
  }
}

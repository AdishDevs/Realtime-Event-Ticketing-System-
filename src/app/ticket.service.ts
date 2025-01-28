import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TicketService {
    private apiUrl = 'http://localhost:1414/api/tickets';


  constructor(private http: HttpClient) {}

   // Method to fetch available tickets
   getAvailableTickets(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/available-tickets`);
  }

  // Method to fetch the system configuration
  getConfiguration(): Observable<{ totalTickets: number }> {
    return this.http.get<{ totalTickets: number }>(`${this.apiUrl}/configuration`);
  }
  

  configureSystem(config: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/configure`, config);
  }

  startSystem(): Observable<any> {
    return this.http.post(`${this.apiUrl}/start`, {});
  }

  stopSystem(): Observable<any> {
    return this.http.post(`${this.apiUrl}/stop`, {});
  }

  addTickets(count: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, null, { params: { count: count.toString() } });
  }

  retrieveTickets(count: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/retrieve`, null, { params: { count: count.toString() } });
  }

  getTicketStatus(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/status`);
  }

  getLogs(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/logs`);
  }
}
